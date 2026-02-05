import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUnicoPessoas } from './cadastro-unico-pessoas';

describe('CadastroUnicoPessoas', () => {
  let component: CadastroUnicoPessoas;
  let fixture: ComponentFixture<CadastroUnicoPessoas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroUnicoPessoas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroUnicoPessoas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
