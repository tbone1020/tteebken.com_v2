import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { PortfolioItemComponent } from './components/portfolio/portfolio-item/portfolio-item.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioService } from './services/portfolio.service';
import { ContactComponent } from './components/contact/contact.component';
import { TechItemPipe } from './shared/pipes/tech-item.pipe';
import { SocialIconsComponent } from './shared/components/social-icons/social-icons.component';
import { CloudsComponent } from './components/hero/clouds/clouds.component';
import { PlaneIconComponent } from './components/hero/plane-icon/plane-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    HeroComponent,
    PortfolioComponent,
    FooterComponent,
    CertificatesComponent,
    PortfolioItemComponent,
    AboutComponent,
    ContactComponent,
    TechItemPipe,
    SocialIconsComponent,
    CloudsComponent,
    PlaneIconComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
