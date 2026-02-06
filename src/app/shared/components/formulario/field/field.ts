import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ControlContainer, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePickerModule } from 'primeng/datepicker';
import { PasswordModule } from 'primeng/password';
import { Uppercase } from '../../../directives/uppercase';
import { Lowercase } from '../../../directives/lowercase';

const COMPONENTES_ANGULAR = [ReactiveFormsModule, CommonModule];
const COMPONENTES_PRIME = [
  FloatLabelModule,
  InputTextModule,
  InputMaskModule,
  PasswordModule,
  DatePickerModule,
  IconFieldModule,
  InputIconModule,
];
const DIRETIVAS = [Uppercase, Lowercase];

@Component({
  selector: 'connect-field',
  imports: [...COMPONENTES_ANGULAR, ...COMPONENTES_PRIME, ...DIRETIVAS, Lowercase],
  templateUrl: './field.html',
  styleUrl: './field.css',
})
export class Field {
  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) label!: string;
  @Input() tipo!: string;
  @Input() maxLen: number = 100;
  @Input({ required: true }) obrigatorio: boolean = false;
  @Input() icone?: string;
  @Input() iconPos: 'left' | 'right' = 'right';
  @Input({ required: true }) unmask: boolean = false;
  @Input() mask?: string;
  @Input({ required: true }) isData: boolean = false;
  @Input({ required: true }) isSenha: boolean = false;
  @Input() feedback: boolean = false;
  @Input() upperCase: boolean = false;
  @Input() lowerCase: boolean = false;

  private container = inject(ControlContainer);

  get control(): FormControl {
    return this.container.control?.get(this.controlName) as FormControl;
  }

  get isInvalid(): boolean {
    if (this.obrigatorio) {
      return !!(
        this.control &&
        this.control.invalid &&
        (this.control.dirty || this.control.touched)
      );
    }
    return false;
  }

  getErrorMessage(): string {
    const errors = this.control?.errors;
    if (errors?.['required']) return 'Este campo é obrigatório.';
    if (errors?.['email']) return 'E-mail inválido.';
    if (errors?.['minlength']) return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;
    if (errors?.['maxlength']) return `Máximo de ${errors['maxlength'].requiredLength} caracteres.`;
    if (errors?.['cpfInvalido']) return 'CPF é inválido.';
    return 'Campo inválido.';
  }
}
