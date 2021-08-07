import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiOneComponent } from './ui-one.component';

describe('UiOneComponent', () => {
  let component: UiOneComponent;
  let fixture: ComponentFixture<UiOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
