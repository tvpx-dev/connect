import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ControlContainer, ReactiveFormsModule, FormControl } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

const COMPONENTES_ANGULAR = [ReactiveFormsModule, CommonModule];
const COMPONENTES_PRIME = [FloatLabelModule, InputTextModule];

@Component({
  selector: 'connect-text-field',
  imports: [...COMPONENTES_ANGULAR, ...COMPONENTES_PRIME],
  templateUrl: './text-field.html',
  styleUrl: './text-field.css',
})
export class TextField {
  @Input({ required: true }) tipo!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) maxLen!: number;
  @Input({ required: true }) obrigatorio!: boolean;
  @Input({ required: true }) controlName!: string;

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
    return 'Campo inválido.';
  }
}
