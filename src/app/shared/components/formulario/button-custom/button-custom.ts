import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

const COMPONENTES_ANGULAR = [CommonModule];
const COMPONENTES_PRIME = [ButtonModule];

@Component({
  selector: 'cnt-button-custom',
  imports: [...COMPONENTES_ANGULAR, ...COMPONENTES_PRIME],
  templateUrl: './button-custom.html',
  styleUrl: './button-custom.css',
})
export class ButtonCustom {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  // Estilos: primary, secondary, success, info, warning, help, danger, contrast
  @Input() severity:
    | 'success'
    | 'info'
    | 'warn'
    | 'help'
    | 'primary'
    | 'secondary'
    | 'contrast'
    | 'danger'
    | null
    | undefined = 'primary';

  // Variantes: null (padrão), 'outlined', 'text', 'link'
  @Input() variant: 'outlined' | 'text' | undefined = undefined;
  @Input() link: boolean = false;

  @Input() size: 'small' | 'large' | undefined;
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() fluid: boolean = false;
  @Input() styleClass: string = '';

  @Output() onClick = new EventEmitter<MouseEvent>();

  handleClick(event: MouseEvent) {
    if (!this.loading && !this.disabled) {
      this.onClick.emit(event);
    }
  }
}
