import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtsPersonsComponent } from './debts-persons.component';

describe('DebtsPersonsComponent', () => {
  let component: DebtsPersonsComponent;
  let fixture: ComponentFixture<DebtsPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebtsPersonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtsPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
