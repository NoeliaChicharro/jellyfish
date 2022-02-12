import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrophoneComponent } from './hydrophone.component';

describe('HydrophoneComponent', () => {
  let component: HydrophoneComponent;
  let fixture: ComponentFixture<HydrophoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrophoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrophoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
