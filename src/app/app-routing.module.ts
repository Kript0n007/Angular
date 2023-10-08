// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './layout/sistema/login/login.component';
import { PessoaListaComponent } from './layout/pessoas/pessoa_lista/pessoa_lista.component';
import { CarrosListaComponent } from './layout/carros/carros-lista/carros-lista.component';
import { LivrosListaComponent } from './layout/livros/livros-lista/livros-lista.component';
import { CalangoHomeComponent } from './layout/calango/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent},
  
  { path: "admin", component: IndexComponent, children: [
    {path: "", component: CalangoHomeComponent},
    {path: "pessoas", component: PessoaListaComponent},
    {path: "livros", component: LivrosListaComponent},
    {path: "carros", component: CarrosListaComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
