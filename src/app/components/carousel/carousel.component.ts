import { Component, Input, OnInit } from '@angular/core';
import { ICarouselImagesStyle, ICarouselStyle } from '../../interfaces/carousel/carousel.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() style: ICarouselStyle = {} as ICarouselStyle;
  imagesStyle: ICarouselImagesStyle = {} as ICarouselImagesStyle;

  constructor() { }

  ngOnInit(): void {
    this.imagesStyle = this.style.images;
  }
  

}
