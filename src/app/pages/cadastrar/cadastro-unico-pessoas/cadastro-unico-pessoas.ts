import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextField } from '../../../shared/components/formulario/text-field/text-field';

const COMPONENTES_ANGULAR = [ReactiveFormsModule];
const COMPONENTES_CONNECT = [TextField];

@Component({
  selector: 'connect-cadastro-unico-pessoas',
  imports: [...COMPONENTES_ANGULAR, ...COMPONENTES_CONNECT],
  templateUrl: './cadastro-unico-pessoas.html',
  styleUrl: './cadastro-unico-pessoas.css',
})
export class CadastroUnicoPessoas {
  cadastrarPessoas: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastrarPessoas = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
}
