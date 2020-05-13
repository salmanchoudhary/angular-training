import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // constructor(renderer: Renderer2, elmRef: ElementRef) {
  //   renderer.setStyle(elmRef.nativeElement, 'background-color', 'yellow');
  // }
  constructor(elmRef: ElementRef) {
   elmRef.nativeElement.style.backgroundColor = 'red'
  }
  // @HostBinding('style.backgroundColor') color: string;
  // @HostListener('mouseenter') newColor() {
  //   this.color = 'red';
  // }
  
  // @HostListener('mouseleave') newColor1() {
  //   this.color = 'blue';
  // }
}
