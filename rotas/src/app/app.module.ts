import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginService } from './login/login.service';
import { AuthGuard } from 'app/guards/auth.guard';
import { CursosGuard } from 'app/guards/cursos.guard';
import { AlunosGuard } from 'app/guards/alunos.guard';
//import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoginService,
    AuthGuard,
    CursosGuard,
    AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
