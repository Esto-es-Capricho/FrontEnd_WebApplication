import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerCardComponent } from './consumer-card.component';

describe('ConsumerCardComponent', () => {
  let component: ConsumerCardComponent;
  let fixture: ComponentFixture<ConsumerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
