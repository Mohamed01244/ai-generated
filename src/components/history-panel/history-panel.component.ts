
import { Component, ChangeDetectionStrategy, input, output, TemplateRef, contentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18N } from '../../i18n';
import { ArticleHistoryItem, SeoHistoryItem } from '../../models';

@Component({
  selector: 'app-history-panel',
  templateUrl: './history-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class HistoryPanelComponent {
  T = input.required<I18N>();
  history = input.required<any[]>();
  loadItem = output<any>();
  deleteItem = output<any>();
  analyzeItem = output<any>();
  generateArticle = output<any>();

  itemTemplate = contentChild<TemplateRef<any>>('itemTemplate');
  
  expandedItems = new Set<number>();

  toggleExpand(id: number) {
    if (this.expandedItems.has(id)) {
      this.expandedItems.delete(id);
    } else {
      this.expandedItems.add(id);
    }
  }

  isExpanded(id: number): boolean {
    return this.expandedItems.has(id);
  }
}
