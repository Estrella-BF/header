import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { QuotationComponent } from './pages/quotation/quotation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'contactanos',
    component: ContactUsComponent
  },
  {
    path: 'nosotros',
    component: AboutUsComponent
  }
  
/*   {
    path: '**',
    component: LoginHazteClienteComponent,
  }, */
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    AboutUsComponent,
    QuotationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
