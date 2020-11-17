import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, Optional } from '@angular/core';
import { UiIconsRegistry } from './icons-registry.service';

@Component({
  selector: 'app-ui-icon',
  templateUrl: './ui-icon.component.html',
  styleUrls: ['./ui-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiIconComponent  {

  private svgIcon: SVGElement | undefined;

    @Input()
    set name(iconName: string) {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.dinosaurIconRegistry.getIcon(iconName);
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
    }

    constructor(private element: ElementRef, private dinosaurIconRegistry: UiIconsRegistry,
                @Optional() @Inject(DOCUMENT) private document: any) {
    }

    private svgElementFromString(svgContent: string| undefined): SVGElement {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }

}
