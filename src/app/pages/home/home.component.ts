import { Component, OnInit } from '@angular/core';
import { RadioButtonsEnum } from 'src/app/enums/carousel-enum';
import { ICarouselStyle } from 'src/app/interfaces/carousel/carousel.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  carouselStyle: ICarouselStyle = {
    images: {
      width: '100% !important',
      height: '75vh',
      heightMobile: '40vh'
    },
    fontSize: '2rem',
    radioButtons: RadioButtonsEnum.BigCircle
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
