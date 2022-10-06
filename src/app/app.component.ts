import { Component, OnInit } from '@angular/core';
import { RadioButtonsEnum } from './enums/carousel-enum';
import { ICarouselStyle } from './interfaces/carousel/carousel.interface';
import { IMenu, IMenuListStyle, ISpecialButton } from './interfaces/header/header.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'header';

  constructor() { }

  ngOnInit() {
  }

  headerStyle = {
    backgroundColor: ''
  };

  dropdownMenu: IMenu[] = [
    {
      id: '1',
      name: 'Alfombra 1',
      url: ''
    },
    {
      id: '2',
      name: 'Alfombra 2',
      url: ''
    },
  ];

  logo = 'https://i.postimg.cc/44bnQgP5/LOGOTIPO-ALFOMBRARTE.png';

  menuList = [
    {
      id: '1',
      name: 'INICIO',
      url: 'inicio'
    },
    {
      id: '2',
      name: 'NOSOTROS',
      url: 'nosotros'
    },
    {
      id: '3',
      name: 'MATERIALES',
      url: 'materiales'
    },
    {
      id: '4',
      name: 'FOTOS',
      url: 'fotos'
    },
    {
      id: '5',
      name: 'CONTACTENOS',
      url: 'contactanos'
    },
  ];

  menuListStyle: IMenuListStyle = {
    color: '#222222',
    fontSize: '1.5rem',
    fontWeight: '300'
  };

  specialButton: ISpecialButton = {
    active: true,
    backgroundColor: '#eb8c2a',
    borderRadius: '1em',
    border: '1px solid #eb8c2a',
    color: 'white',
    fontSize: '1.6rem',
    fontWeight: '600',
    padding: '0.1em 0.8em 0em 1em',
    text: 'COTIZAR ALFOMBRA',
  }
}
