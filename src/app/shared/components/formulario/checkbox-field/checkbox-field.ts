import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlContainer, FormGroup, FormControl } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

const COMPONENTES_ANGULAR = [CommonModule, ReactiveFormsModule];
const COMPONENTES_PRIME = [CheckboxModule];

@Component({
  selector: 'cnt-checkbox',
  imports: [...COMPONENTES_ANGULAR, ...COMPONENTES_PRIME],
  templateUrl: './checkbox-field.html',
  styleUrl: './checkbox-field.css',
})
export class CheckboxField {
  private container = inject(ControlContainer);

  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) label!: string;
  @Input() binary: boolean = true; // Se true, funciona como true/false. Se false, usa array.
  @Input() disabled: boolean = false;
  @Input() value: any = null;

  get control(): FormControl {
    const parentForm = (this.container as any).form || this.container.control;
    return parentForm?.get(this.controlName) as FormControl;
  }

  // Se não houver 'value', ele é binário (true/false)
  get isBinary(): boolean {
    return this.value === null;
  }

  get isInvalid(): boolean {
    return !!(this.control?.invalid && (this.control?.dirty || this.control?.touched));
  }
}
