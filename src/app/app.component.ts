import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fe-onboarding-pyme';
  pathName: string = '';
  mostrarHeader: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.pushPageViewAlCambiarRuta();
  }

  pushPageViewAlCambiarRuta() {
    this.router.events.subscribe((rutaActual) => {
      if (rutaActual instanceof NavigationEnd) {
        window.scroll(0, 0);
        // se detecta que tenga query param
        if (this.router.url === '/' || this.router.url.includes('/?') ) {
          this.mostrarHeader = false;
        } else {
          this.mostrarHeader = true;
        }
      }
    });
  }
}
