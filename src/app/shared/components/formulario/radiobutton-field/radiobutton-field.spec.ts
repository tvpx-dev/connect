import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonField } from './radiobutton-field';

describe('RadiobuttonField', () => {
  let component: RadiobuttonField;
  let fixture: ComponentFixture<RadiobuttonField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiobuttonField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiobuttonField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
