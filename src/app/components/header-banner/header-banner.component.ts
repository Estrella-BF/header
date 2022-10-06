import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss'],
})
export class HeaderBannerComponent implements OnInit {

  @Input()
  backgroundPath: string = '';

  @Input()
  description: string = '';

  backgroundUrl = '';

  constructor() { }

  ngOnInit(): void {
    this.backgroundUrl = `url(${this.backgroundPath})`;
  }

}
