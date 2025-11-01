
import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="relative inline-flex items-center ltr:ml-1 rtl:mr-1">
      <button 
        (click)="tooltipClick.emit()"
        type="button"
        class="flex items-center justify-center w-4 h-4 text-xs font-bold text-gray-500 bg-gray-200 border border-gray-400 rounded-full hover:bg-gray-300 focus:outline-none"
        aria-label="More info">
        ?
      </button>
      @if (activeTooltip() === tooltipId()) {
        <div class="absolute bottom-full mb-2 w-64 p-2 text-sm text-white bg-gray-800 rounded-md shadow-lg z-10 start-1/2 -translate-x-1/2">
          {{ text() }}
          <div class="absolute top-full start-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TooltipComponent {
  text = input.required<string>();
  tooltipId = input.required<string>();
  activeTooltip = input.required<string | null>();
  tooltipClick = output<void>();
}
