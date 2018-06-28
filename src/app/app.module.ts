//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { HeroInfoComponent } from './components/hero-info/hero-info.component';
import { HerosComponent } from './components/hero-info/heros.component';
//Routing
import { APP_ROUTING } from './routes';
import { FirebasePipe } from './pipes/firebase.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeroInfoComponent,
    HerosComponent,
    FirebasePipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
