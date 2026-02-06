import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, ControlContainer, FormControl } from '@angular/forms';
import { AutoCompleteModule, AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { FloatLabelModule } from 'primeng/floatlabel';

const COMPONENTES_ANGULAR = [CommonModule, ReactiveFormsModule];
const COMPONENTES_PRIME = [AutoCompleteModule, FloatLabelModule];

@Component({
  selector: 'cnt-autocomplete-field',
  imports: [...COMPONENTES_ANGULAR, ...COMPONENTES_PRIME],
  templateUrl: './autocomplete-field.html',
  styleUrl: './autocomplete-field.css',
})
export class AutocompleteField {
  private container = inject(ControlContainer);

  @Input({ required: true }) controlName!: string;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) suggestions: any[] = []; // Lista de sugestões filtradas

  @Input() optionLabel: string = 'label'; // Campo para exibir
  @Input() dropdown: boolean = true; // Exibe aquela setinha lateral
  @Input() minLength: number = 1; // Quantos caracteres para começar a busca
  @Input() placeholder: string = '';

  // Evento que dispara para o pai filtrar os dados
  @Output() onSearch = new EventEmitter<string>();

  get control(): FormControl {
    const parentForm = (this.container as any).form || this.container.control;
    return parentForm?.get(this.controlName) as FormControl;
  }

  handleSearch(event: AutoCompleteCompleteEvent) {
    this.onSearch.emit(event.query);
  }

  get isInvalid(): boolean {
    return !!(this.control?.invalid && (this.control?.dirty || this.control?.touched));
  }
}
