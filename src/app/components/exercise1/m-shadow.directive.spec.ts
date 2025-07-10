import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MShadowDirective } from './m-shadow.directive';

@Component({
  template: `<input [formControl]="control" mShadow [theme]="'light'" />`
})
class TestComponent {
  control = new FormControl('');
}

describe('MShadowDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, MShadowDirective],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should apply shadow by default', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input.style.boxShadow).toContain('rgba(0, 0, 0, .15)');
  });

  it('aplica sombra roja si hay error', () => {
    const comp = fixture.componentInstance;
    comp.control.markAsTouched();
    comp.control.setErrors({ required: true });
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.style.boxShadow).toContain('#e9001f');
  });
});
