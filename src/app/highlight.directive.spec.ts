/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

@Component({
  template: `
    <p appHighlight="cyan">First</p>
    <p appHighlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveHostComponent, HighlightDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  it('should highlight the first element with the color cyan', () => {
    const de: DebugElement = fixture.debugElement.queryAll(By.css('p'))[0];

    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with the default color', () => {
    const de: DebugElement = fixture.debugElement.queryAll(By.css('p'))[1];
    const directive: HighlightDirective = de.injector.get(HighlightDirective);

    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
