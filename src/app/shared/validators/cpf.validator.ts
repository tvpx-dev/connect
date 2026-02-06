import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CpfValidator {
  static validar(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const cpf = control.value ? String(control.value).replace(/\D/g, '') : '';

      if (!cpf) return null; // 'required' trata campos vazios

      if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return { cpfInvalido: true };
      }

      let soma = 0;
      let resto;

      for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;
      if (resto === 10 || resto === 11) resto = 0;
      if (resto !== parseInt(cpf.substring(9, 10))) return { cpfInvalido: true };

      soma = 0;
      for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;
      if (resto === 10 || resto === 11) resto = 0;
      if (resto !== parseInt(cpf.substring(10, 11))) return { cpfInvalido: true };

      return null;
    };
  }
}
