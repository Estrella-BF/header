import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*   {
    path: '',
    component: LoginHazteClienteComponent,
  }, */
  {
    path: 'ofertas',
    component: ContactUsComponent
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
    ContactUsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
