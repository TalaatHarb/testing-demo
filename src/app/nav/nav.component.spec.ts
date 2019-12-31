import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { DebugElement } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [RouterTestingModule.withRoutes([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a link to todos page', () => {
    const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const key = 'href';
    const hrefLink = '/todos';
    const index = debugElements.findIndex(de => (de.properties[key] === hrefLink));

    expect(index).toBeGreaterThanOrEqual(0);
  });
});
