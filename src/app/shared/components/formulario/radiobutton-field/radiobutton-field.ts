import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlContainer, FormControl } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

const COPONENTES_ANGULAR = [CommonModule, ReactiveFormsModule];
const COMPONENTES_PRIME = [RadioButtonModule];

@Component({
  selector: 'cnt-radiobutton',
  imports: [...COPONENTES_ANGULAR, ...COMPONENTES_PRIME],
  templateUrl: './radiobutton-field.html',
  styleUrl: './radiobutton-field.css',
})
export class RadiobuttonField {
  private container = inject(ControlContainer);

  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value: any; // O valor que este rádio representa
  @Input() disabled: boolean = false;

  get control(): FormControl {
    const parentForm = (this.container as any).form || this.container.control;
    return parentForm?.get(this.controlName) as FormControl;
  }

  get isInvalid(): boolean {
    return !!(this.control?.invalid && (this.control?.dirty || this.control?.touched));
  }
}
