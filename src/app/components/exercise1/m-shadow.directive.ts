import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  DoCheck,
  Optional
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[mShadow]',
  standalone: true
})
export class MShadowDirective implements OnInit, DoCheck {
  @Input('mShadow') customShadow: string = '';
  @Input() theme: 'light' | 'dark' = 'light';

  private defaultShadow = '0px 2px 6px 2px rgba(0, 0, 0, .15), 0px 1px 2px 0px rgba(0, 0, 0, .3)';
  private transition = 'box-shadow 0.3s ease-in-out';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Optional() private control: NgControl
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transition', this.transition);
    this.addShadow(this.customShadow || this.defaultShadow);
  }

  ngDoCheck(): void {

    if (!this.control) return;

    if (this.control.invalid && this.control.touched) {
      this.addShadow(`0 0 10px #e9001f`);
    } else if (this.control.dirty && !this.control.invalid) {
      this.addShadow(`0 0 10px #ec7304`);
    } else if (this.control.valid) {
      this.addShadow(`0 0 10px #0f803e`);
    } 
    
  }

  private addShadow(shadow: string): void {
    const themeGlow = this.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    const finalShadow = `${shadow}, 0 0 4px ${themeGlow}`;
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', finalShadow);
  }
}
