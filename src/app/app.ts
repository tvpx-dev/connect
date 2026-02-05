import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextField } from './shared/components/formulario/text-field/text-field';

const COMPONENTES_ANGULAR = [RouterOutlet, ReactiveFormsModule];
const COMPONENTES_PRIME = [];
const COMPONENTES_CONNECT = [];

@Component({
  selector: 'app-root',
  imports: [...COMPONENTES_ANGULAR],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
