import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.scss']
})
export class ZoomImageComponent implements OnInit {

  @Input()
  imageUrl: string = '';

  public value = true;


  constructor() { }

  ngOnInit() {
    // this.slickConfig();
  };

/*   private slickConfig() {
    setTimeout( () => {
      const slick = {
        dots: true,
        infinite: true,
        cssEase: 'linear'
      };
      slick['slidesToShow'] = 1;
      slick['slidesToScroll'] = 1;
      $('.multiple-items').slick(slick);
    }, 100);
  } */

  public zoomIn(event: any) {
    console.log('zoom in', event);
    
    if (event) {

      const zoomer = event.currentTarget;
      let offsetX: number;
      let offsetY: number = 0;
      let x: number;
      let y: number;

      event.offsetX ? offsetX = event.offsetX : offsetX = event.touches[0].pageX;
      event.offsetY ? offsetY = event.offsetY : offsetX = event.touches[0].pageX;

      x = offsetX / zoomer.offsetWidth * 100;
      y = offsetY / zoomer.offsetHeight * 100;

      zoomer.style.backgroundPosition = x + '% ' + y + '%';
      console.log('--zoomer', zoomer.style.backgroundPosition);
      console.log('------');
      
  
    }
  }

  public zoomOut(event: any) {
  
  }

}
