import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { PessoaListaComponent } from './layout/pessoas/pessoa_lista/pessoa_lista.component';
import { LoginComponent } from './layout/sistema/login/login.component';
import { PessoaDetailsComponent } from './layout/pessoas/pessoa_details/pessoa-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosListaComponent } from './layout/carros/carros-lista/carros-lista.component';
import { CarrosDetailsComponent } from './layout/carros/carros-details/carros-details.component';
import { LivrosDetailsComponent } from './layout/livros/livros-details/livros-details.component';
import { HeaderComponent } from './components/header/header.component';
import { LivrosListaComponent } from './layout/livros/livros-lista/livros-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoaListaComponent,
    LoginComponent,
    PessoaDetailsComponent,
    FooterComponent,
    CarrosListaComponent,
    CarrosDetailsComponent,
    LivrosDetailsComponent,
    HeaderComponent,
    LivrosListaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
