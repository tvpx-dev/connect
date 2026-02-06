import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteField } from './autocomplete-field';

describe('AutocompleteField', () => {
  let component: AutocompleteField;
  let fixture: ComponentFixture<AutocompleteField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
