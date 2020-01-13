import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { PortfolioComponent } from './components/home/portfolio/portfolio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CertificatesComponent } from './components/home/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HeroComponent,
    PortfolioComponent,
    FooterComponent,
    CertificatesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
