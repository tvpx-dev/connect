import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlContainer, FormControl } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { FloatLabelModule } from 'primeng/floatlabel';

const COMPONENTES_ANGULAR = [CommonModule, ReactiveFormsModule];
const COMPONENTES_PRIME = [SelectModule, FloatLabelModule];

@Component({
  selector: 'cnt-select-field',
  imports: [...COMPONENTES_ANGULAR, ...COMPONENTES_PRIME],
  templateUrl: './select-field.html',
  styleUrl: './select-field.css',
})
export class SelectField {
  private container = inject(ControlContainer);

  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) options: any[] = [];

  // Propriedades para mapear o objeto
  @Input() optionLabel: string = 'label';
  @Input() optionValue: string = 'value';

  @Input() showClear: boolean = true;
  @Input() filter: boolean = false; // Adiciona campo de busca interno

  get control(): FormControl {
    const parentForm = (this.container as any).form || this.container.control;
    return parentForm?.get(this.controlName) as FormControl;
  }

  get isInvalid(): boolean {
    return !!(this.control?.invalid && (this.control?.dirty || this.control?.touched));
  }
}
