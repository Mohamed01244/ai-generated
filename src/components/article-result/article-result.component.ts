
import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { ArticleResult } from '../../models';
import { I18N } from '../../i18n';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-result',
  templateUrl: './article-result.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, KeyValuePipe],
})
export class ArticleResultComponent {
  T = input.required<I18N>();
  result = input.required<ArticleResult>();
  theme = input<string>('professional');
  analyze = output<void>();

  parsedResultJson = computed(() => {
    try {
      return JSON.parse(this.result().json);
    } catch (e) {
      return null;
    }
  });

  safeHtml: SafeHtml = '';
  
  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnChanges() {
    if(this.parsedResultJson()?.article_html) {
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.parsedResultJson().article_html);
    }
  }

  copyToClipboard(text: string, type: string) {
    navigator.clipboard.writeText(text).then(() => {
        alert(this.T().copySuccess(type));
    }).catch(err => console.error('Failed to copy text: ', err));
  }
  
  downloadFile(filename: string, content: string, mimeType: string) {
    const element = document.createElement('a');
    const file = new Blob([content], {type: mimeType});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
