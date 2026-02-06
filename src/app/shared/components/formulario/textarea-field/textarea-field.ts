import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';

const COMPONENTES_ANGULAR = [CommonModule, ReactiveFormsModule];
const COMPONENTES_PRIME = [TextareaModule, FloatLabelModule];

@Component({
  selector: 'cnt-textarea',
  imports: [...COMPONENTES_ANGULAR, ...COMPONENTES_PRIME],
  templateUrl: './textarea-field.html',
  styleUrl: './textarea-field.css',
})
export class TextareaField {
  private container = inject(ControlContainer);

  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) label!: string;
  @Input() rows: number = 3;
  @Input() cols: number = 30;
  @Input() autoResize: boolean = true;
  @Input() placeholder: string = '';

  get control(): FormControl {
    const parentForm = (this.container as any).form || this.container.control;
    return parentForm?.get(this.controlName) as FormControl;
  }

  get isInvalid(): boolean {
    return !!(this.control?.invalid && (this.control?.dirty || this.control?.touched));
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
