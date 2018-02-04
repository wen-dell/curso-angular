import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[campoCresce]'
})
export class CampoCresceDirective {

  @HostListener('focus') onFocus() {
    this.width = '338px';
  }

  @HostListener('blur') onBlur() {
    this.width = '169px';
  }

  @HostBinding('style.width') width: string;

  constructor() { }

}
