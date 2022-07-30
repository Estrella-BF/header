import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList = [
    {
      id: '1',
      name: 'INICIO'
    },
    {
      id: '1',
      name: 'NOSOTROS'
    },
    {
      id: '1',
      name: 'MATERIALES'
    },
    {
      id: '1',
      name: 'FOTOS'
    },
    {
      id: '1',
      name: 'CONTÁCTANOS'
    },
  ];

  menuListStyle = {
    color: '#030a01',
    fontSize: '1.8rem',
  };

  specialButton = {
    active: true,
    backgroundColor: '#eb8c2a',
    borderRadius: '1em',
    color: '#030a01',
    fontSize: '1.8rem',
    fontWeight: '600',
    padding: '0.1em 0.8em',
    text: 'COTIZAR ALFOMBRA',
    margin: '0 0 0.7em 0'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
