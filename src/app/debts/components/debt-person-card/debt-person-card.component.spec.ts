import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtPersonCardComponent } from './debt-person-card.component';

describe('DebtPersonCardComponent', () => {
  let component: DebtPersonCardComponent;
  let fixture: ComponentFixture<DebtPersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebtPersonCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
