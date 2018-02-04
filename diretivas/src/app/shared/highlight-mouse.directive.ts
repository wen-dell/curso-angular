import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') 
  onMouseOver() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() {

  }

}
