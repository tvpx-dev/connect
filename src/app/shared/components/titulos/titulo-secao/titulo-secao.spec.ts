import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloSecao } from './titulo-secao';

describe('TituloSecao', () => {
  let component: TituloSecao;
  let fixture: ComponentFixture<TituloSecao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloSecao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloSecao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
