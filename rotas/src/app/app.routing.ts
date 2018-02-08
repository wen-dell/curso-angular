import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { CursosComponent } from 'app/cursos/cursos.component';
import { CursoDetalheComponent } from 'app/curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'curso/:id', component: CursoDetalheComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);