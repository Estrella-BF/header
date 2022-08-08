import { Component, Input, OnInit } from '@angular/core';
import { IHeaderStyle, IMenu, IMenuListStyle, ISpecialButton } from './models/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() dropdownMenu: IMenu[] = [];
  @Input() headerStyle: IHeaderStyle = {} as IHeaderStyle;
  @Input() logo: string = '';
  @Input() menuList: IMenu[] = [];

  @Input() menuListStyle: IMenuListStyle = {} as IMenuListStyle;

  @Input() specialButton: ISpecialButton = {} as ISpecialButton;

  constructor() { }

  ngOnInit(): void {
  }

}
