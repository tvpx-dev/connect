import { Routes } from '@angular/router';
import { CadastroUnicoPessoas } from './pages/cadastrar/cadastro-unico-pessoas/cadastro-unico-pessoas';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastrar/cadastro-unico-pessoas', pathMatch: 'full' },
  { path: 'cadastrar/cadastro-unico-pessoas', component: CadastroUnicoPessoas },
];
