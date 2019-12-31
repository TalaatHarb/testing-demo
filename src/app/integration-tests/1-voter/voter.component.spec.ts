import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should render totalVotes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain((component.othersVote + component.myVote) + '');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    const classToConfirm = 'highlighted';
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-button'));

    expect(de.classes[classToConfirm]).toBeTruthy();
  });

  it('should increase totalVotes when user clicks the upvote button', () => { 
    const button = fixture.debugElement.query(By.css('.vote-button'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
