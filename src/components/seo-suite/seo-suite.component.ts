
import { Component, ChangeDetectionStrategy, input, output, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18N } from '../../i18n';
import { SeoParameters, SeoHistoryItem, SeoResult } from '../../models';
import { GeminiService } from '../../services/gemini.service';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { LANGUAGES, COUNTRIES, LANGUAGE_MAP, COUNTRY_MAP } from '../../constants';
// Import other necessary components when created

@Component({
  selector: 'app-seo-suite',
  templateUrl: './seo-suite.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TooltipComponent], // Add SeoResultComponent, HistoryPanelComponent later
})
export class SeoSuiteComponent {
  T = input.required<I18N>();
  initialData = input<any | null>(null);
  dataLoaded = output<void>();

  topic = signal('');
  params = signal<SeoParameters>({
    language: 'Arabic',
    country: 'WW-AR',
    intent: 'Informational',
    competitors: '',
    audience_persona: '',
    tone: 'Professional',
    business_goal: 'drive_traffic',
    humanization_level: 'standard',
  });
  
  loading = signal(false);
  error = signal('');
  result = signal<SeoResult | null>(null);
  currentView = signal<'new' | 'history'>('new');
  activeTooltip = signal<string | null>(null);
  
  // Placeholder for history
  history = signal<SeoHistoryItem[]>([]);

  LANGUAGES = LANGUAGES;
  LANGUAGE_MAP = LANGUAGE_MAP;
  COUNTRIES = COUNTRIES;
  COUNTRY_MAP = COUNTRY_MAP;

  constructor(private geminiService: GeminiService) {
      effect(() => {
        const data = this.initialData();
        if (data) {
            const combinedTopic = [data.topic, data.focusKeywords].filter(Boolean).join(', ');
            this.topic.set(combinedTopic);
            this.params.update(p => ({
                ...p,
                language: data.language || 'Arabic',
                audience_persona: data.audience || '',
                tone: data.tone || 'Professional',
            }));
            this.result.set(null);
            this.dataLoaded.emit();
        }
    });
  }

  updateParam(key: keyof SeoParameters, value: any) {
    this.params.update(p => ({ ...p, [key]: value }));
  }

  async generateSeoStrategy() {
    if (!this.topic().trim()) return;
    this.loading.set(true);
    this.error.set('');
    this.result.set(null);

    try {
      const response = await this.geminiService.generateSeoStrategy(this.topic(), this.params());
      const responseText = response.text.trim();
      const jsonMatch = responseText.match(/\{.*\}/s);
      if (!jsonMatch) throw new Error("No valid JSON found in response.");
      const parsedJson = JSON.parse(jsonMatch[0]);
      
      const currentResult: SeoResult = { json: JSON.stringify(parsedJson, null, 2) };
      this.result.set(currentResult);

      // History logic would go here
    } catch (e) {
      console.error(e);
      this.error.set(this.T().seoError);
    } finally {
      this.loading.set(false);
    }
  }

}
