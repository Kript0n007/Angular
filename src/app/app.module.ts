import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { PessoaListaComponent } from './layout/pessoas/pessoa_lista/pessoa_lista.component';
import { LoginComponent } from './layout/sistema/login/login.component';
import { PessoaDetailsComponent } from './layout/pessoas/pessoa_details/pessoa-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosListaComponent } from './layout/carros/carros-lista/carros-lista.component';
import { CarrosDetailsComponent } from './layout/carros/carros-details/carros-details.component';
import { LivrosListaComponent } from './layout/livros/livros-lista/livros-lista.component';
import { LivrosDetailsComponent } from './layout/livros/livros-details/livros-details.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    PessoaListaComponent,
    LoginComponent,
    PessoaDetailsComponent,
    FooterComponent,
    CarrosListaComponent,
    CarrosDetailsComponent,
    LivrosListaComponent,
    LivrosDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
