// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './layout/sistema/login/login.component';
import { PessoaListaComponent } from './layout/pessoas/pessoa_lista/pessoa_lista.component';
import { PessoaDetailsComponent } from './layout/pessoas/pessoa_details/pessoa-details.component';
import { CarrosListaComponent } from './layout/carros/carros-lista/carros-lista.component';
import { LivrosListaComponent } from './layout/livros/livros-lista/livros-lista.component';
import { LivrosDetailsComponent } from './layout/livros/livros-details/livros-details.component';
import { CarrosDetailsComponent } from './layout/carros/carros-details/carros-details.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent},
  { path: 'carros', component: CarrosListaComponent },
  { path: 'livros', component: LivrosListaComponent },

  { path: "admin", component: IndexComponent, children: [
    {path: "pessoas", component: PessoaListaComponent},
    {path: "pessoas/cadastrar", component: PessoaDetailsComponent},
    {path: "pessoas/editar/:id", component: PessoaDetailsComponent},

    {path: "livros", component: LivrosListaComponent},
    {path: "livros/cadastrar", component: LivrosDetailsComponent},
    {path: "livros/editar/:id", component:LivrosDetailsComponent},

    {path: "carros", component: CarrosListaComponent},
    {path: "carros/cadastrar", component:CarrosDetailsComponent},
    {path: "carros/editar/:id", component:CarrosDetailsComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
