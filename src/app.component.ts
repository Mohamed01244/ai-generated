
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleGeneratorComponent } from './components/article-generator/article-generator.component';
import { SeoSuiteComponent } from './components/seo-suite/seo-suite.component';
import { I18N, i18n } from './i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ArticleGeneratorComponent, SeoSuiteComponent],
})
export class AppComponent {
  uiLang = signal<'en' | 'ar'>('ar');
  T = signal<I18N>(i18n.ar);
  mainTab = signal<'generator' | 'seoSuite'>('generator');
  
  seoSuiteInitialData = signal<any>(null);
  articleGeneratorInitialData = signal<any>(null);

  constructor() {
    document.documentElement.lang = this.uiLang();
    document.documentElement.dir = this.T().dir;
  }

  setUiLang(lang: 'en' | 'ar') {
    this.uiLang.set(lang);
    this.T.set(i18n[lang]);
    document.documentElement.lang = lang;
    document.documentElement.dir = this.T().dir;
  }

  handleAnalyzeRequest(data: any) {
    this.seoSuiteInitialData.set(data);
    this.mainTab.set('seoSuite');
  }
}
