import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[textoAzul]'
})
export class TextoAzulDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'blue');
  }

}
