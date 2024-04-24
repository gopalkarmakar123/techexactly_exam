import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPasswordVisibility]'
})
export class PasswordVisibilityDirective {
  private inputType: string = 'password';
  private isVisible: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onMouseClick() {
    this.toggleVisibility();
  }

  private toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.inputType = this.isVisible ? 'text' : 'password';
    this.renderer.setProperty(this.el.nativeElement.previousElementSibling, 'type', this.inputType);
  }


}
