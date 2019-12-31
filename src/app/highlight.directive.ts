import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  defaultColor = 'yellow';

  @Input() appHighlight: string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight || this.defaultColor;
  }
}
