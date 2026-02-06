import { Component, inject, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import ptBr from './i18n/pt-br.json';

const COMPONENTES_ANGULAR = [RouterOutlet, ReactiveFormsModule];
const COMPONENTES_PRIME = [];
const COMPONENTES_CONNECT = [];

@Component({
  selector: 'app-root',
  imports: [...COMPONENTES_ANGULAR],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private primeng = inject(PrimeNG);
  ngOnInit() {
    this.traducaoCalendario();
  }

  traducaoCalendario() {
    this.primeng.setTranslation(ptBr);
    this.primeng.ripple.set(true);
  }
}
