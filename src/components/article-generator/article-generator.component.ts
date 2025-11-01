
import { Component, ChangeDetectionStrategy, input, output, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleParameters, ArticleHistoryItem, ArticleResult } from '../../models';
import { GeminiService } from '../../services/gemini.service';
import { I18N } from '../../i18n';
import { LANGUAGES, COUNTRIES, LANGUAGE_MAP, COUNTRY_MAP } from '../../constants';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { ArticleResultComponent } from '../article-result/article-result.component';
import { HistoryPanelComponent } from '../history-panel/history-panel.component';

@Component({
  selector: 'app-article-generator',
  templateUrl: './article-generator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TooltipComponent, ArticleResultComponent, HistoryPanelComponent],
})
export class ArticleGeneratorComponent {
  T = input.required<I18N>();
  initialData = input<any | null>(null);
  dataLoaded = output<void>();
  analyzeRequest = output<any>();
  
  topic = signal('');
  params = signal<ArticleParameters>({
    article_language: 'Arabic',
    creativity_level: 'balanced',
    article_length: 'medium',
    tone: 'Journalistic',
    use_google_search: true,
    seo_title: '',
    target_audience: '',
    focus_keywords: '',
    negative_keywords: '',
    point_of_view: 'third_person',
    structure: 'standard',
    readability_level: 'high_school',
    content_depth: 'detailed',
    expert_persona: 'Expert Journalist',
    evidence_and_data: 'standard',
    content_quality: 'premium_article',
    include_faq: false,
    call_to_action: '',
    humanization_level: 'standard',
    article_theme: 'professional',
  });
  
  loading = signal(false);
  isSuggesting = signal(false);
  seedKeyword = signal('');
  error = signal('');
  result = signal<ArticleResult | null>(null);
  currentView = signal<'generator' | 'history'>('generator');
  activeTooltip = signal<string | null>(null);

  history = signal<ArticleHistoryItem[]>(this.loadHistory());

  LANGUAGES = LANGUAGES;
  LANGUAGE_MAP = LANGUAGE_MAP;

  constructor(private geminiService: GeminiService) {
    effect(() => {
        const data = this.initialData();
        if (data) {
            this.topic.set(data.topic || '');
            this.params.update(p => ({
                ...p,
                article_language: data.language || 'Arabic',
                target_audience: data.audience || '',
                tone: data.tone || 'Professional',
                focus_keywords: data.focusKeywords || '',
                seo_title: data.seoTitle || ''
            }));
            this.result.set(null);
            this.dataLoaded.emit();
            window.scrollTo(0, 0);
        }
    });
  }

  updateParam(key: keyof ArticleParameters, value: any) {
    this.params.update(p => ({ ...p, [key]: value }));
  }

  async generateSeoSuggestions() {
    if (!this.seedKeyword().trim() || this.isSuggesting()) return;
    this.isSuggesting.set(true);
    this.error.set('');
    try {
        const response = await this.geminiService.generateSeoSuggestions(this.seedKeyword(), this.params().article_language);
        const responseText = response.text.trim();
        const jsonMatch = responseText.match(/\{.*\}/s);
        if (!jsonMatch) throw new Error("No valid JSON found in suggestion response.");
        const suggestions = JSON.parse(jsonMatch[0]);
        this.params.update(p => ({
            ...p,
            seo_title: suggestions.seo_title || '',
            focus_keywords: (suggestions.focus_keywords || []).join(', '),
            negative_keywords: (suggestions.negative_keywords || []).join(', '),
            target_audience: suggestions.target_audience || '',
            call_to_action: suggestions.call_to_action || '',
        }));
    } catch (e) {
        console.error(e);
        this.error.set(this.T().suggestionError);
    } finally {
        this.isSuggesting.set(false);
    }
  }

  async generateArticle() {
    if (!this.topic().trim()) return;
    this.loading.set(true);
    this.error.set('');
    this.result.set(null);
    try {
        const contentResponse = await this.geminiService.generateArticle(this.topic(), this.params());
        const responseText = contentResponse.text;
        const separator = '---';
        const separatorIndex = responseText.indexOf(separator);
        if (separatorIndex === -1) throw new Error('Invalid response format from API.');
        
        const jsonPart = responseText.substring(0, separatorIndex);
        const articleText = responseText.substring(separatorIndex + separator.length).trim();
        const jsonMatch = jsonPart.match(/\{.*\}/s);
        if (!jsonMatch) throw new Error('Could not find a valid JSON object in the response.');
        
        const parsedJson = JSON.parse(jsonMatch[0]);
        const prettyJson = JSON.stringify(parsedJson, null, 2);
        const sources = contentResponse.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        
        let aiImageBase64: string | null = null;
        if (parsedJson.ai_image_prompt) {
            aiImageBase64 = await this.geminiService.generateImage(parsedJson.ai_image_prompt);
        }

        const currentResult: ArticleResult = { 
            json: prettyJson, 
            article: articleText, 
            html: parsedJson.article_html || '', 
            seoHeadBlock: parsedJson.seo_head_block || '', 
            sources: sources, 
            aiImageBase64: aiImageBase64,
        };
        this.result.set(currentResult);
        
        const newHistoryItem: ArticleHistoryItem = { 
            id: Date.now(), 
            topic: this.topic(), 
            params: this.params(), 
            result: currentResult, 
            createdAt: new Date().toISOString()
        };
        this.history.update(h => [newHistoryItem, ...h]);
        this.saveHistory();
    } catch (e) {
        console.error(e);
        this.error.set(this.T().errorPrefix);
    } finally {
        this.loading.set(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  handleAnalyze(item: ArticleHistoryItem) {
    const parsedJson = JSON.parse(item.result.json);
    const articleData = {
        topic: item.topic,
        language: item.params.article_language,
        audience: item.params.target_audience,
        tone: item.params.tone,
        focusKeywords: parsedJson.seo_keywords?.primary?.join(', ') || ''
    };
    this.analyzeRequest.emit(articleData);
  }

  // History Management
  private saveHistory() {
    localStorage.setItem('articleHistory', JSON.stringify(this.history()));
  }

  private loadHistory(): ArticleHistoryItem[] {
    try {
      const savedHistory = localStorage.getItem('articleHistory');
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (e) {
      return [];
    }
  }

  loadFromHistory(item: ArticleHistoryItem) {
    this.topic.set(item.topic);
    this.params.set(item.params);
    this.result.set(item.result);
    this.currentView.set('generator');
    window.scrollTo(0, 0);
  }

  deleteFromHistory(id: number) {
    if (confirm(this.T().confirmDeleteHistory)) {
      this.history.update(h => h.filter(item => item.id !== id));
      this.saveHistory();
    }
  }
}
