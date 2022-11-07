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
import { HeaderBannerComponent } from './components/header-banner/header-banner.component';
import { QuotationStepComponent } from './pages/quotation/components/quotation-step/quotation-step.component';
import { SimpleCatalogComponent } from './pages/simple-catalog/simple-catalog.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ZoomImageComponent } from './components/zoom-image/zoom-image.component';

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
  },
  {
    path: 'cotizacion',
    component: QuotationComponent
  },
  {
    path: 'fotos',
    component: GalleryComponent
  },
  // customized name route
  {
    path: 'materiales',
    component: SimpleCatalogComponent
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
    QuotationComponent,
    HeaderBannerComponent,
    QuotationStepComponent,
    SimpleCatalogComponent,
    GalleryComponent,
    ZoomImageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
