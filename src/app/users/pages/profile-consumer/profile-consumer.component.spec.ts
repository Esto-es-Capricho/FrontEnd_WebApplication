import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConsumerComponent } from './profile-consumer.component';

describe('ProfileConsumerComponent', () => {
  let component: ProfileConsumerComponent;
  let fixture: ComponentFixture<ProfileConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileConsumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
