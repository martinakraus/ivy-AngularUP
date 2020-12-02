import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UiModule} from './ui.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IvyComponent} from './ivy-components/ivy.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {CatComponent} from './cat/cat.component';
import {LazyCatComponent} from './ivy-components/lazy-cat/lazy-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IvyComponent,
    HeaderComponent,
    HomeComponent,
    CatComponent,
    //  LazyCatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
