import { Directive, HostListener, inject, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[lowercase]',
  standalone: true,
})
export class Lowercase {
  @Input('lowercase') enabled: boolean = true;

  private control = inject(NgControl);

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    if (!this.enabled) return;

    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (value) {
      // Remove acentos e Ç
      value = value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[çÇ]/g, 'c');

      // Converte para minúsculas
      value = value.toLowerCase();

      input.value = value;
      this.control.control?.setValue(value, { emitEvent: false });
    }
  }
}
