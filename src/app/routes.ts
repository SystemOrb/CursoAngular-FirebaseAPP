/*
Routes
*/
import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './components/hero-info/heros.component';
import { HeroInfoComponent } from './components/hero-info/hero-info.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HeroInfoComponent },
  { path: 'hero/:id', component: HerosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
// SI QUEREMOS TRABAJAR CON PARAMETROS
//APP_ROUTES, {useHash:true}
