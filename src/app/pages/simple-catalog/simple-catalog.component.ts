import { Component, OnInit } from '@angular/core';
import { IImage } from './simple-catalog.interface';

@Component({
  selector: 'app-simple-catalog',
  templateUrl: './simple-catalog.component.html',
  styleUrls: ['./simple-catalog.component.scss']
})
export class SimpleCatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images: IImage[] = [
    {
      url: './assets/temp/catalog-test-image.jpeg',
      name: 'HANDTUFTED DE OVINO EN ALT. DE 14 y 16 MM'
    },
    {
      url: './assets/temp/catalog-test-image-2.jpeg',
      name: 'TELAR DE OVINO'
    },
    {
      url: './assets/temp/catalog-test-image.jpeg',
      name: 'ALPACA SURI'
    },
    {
      url: './assets/temp/catalog-test-image.jpeg',
      name: 'PATCHWORK CUERO DE VACA'
    },
    {
      url: './assets/temp/catalog-test-image.jpeg',
      name: 'SHAGGY DE OVINO EN ALT. DE 25 y 35 MM'
    }
  ]

}
