import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesModalComponent } from './rules-modal.component';

describe('RulesModalComponent', () => {
  let component: RulesModalComponent;
  let fixture: ComponentFixture<RulesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RulesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
