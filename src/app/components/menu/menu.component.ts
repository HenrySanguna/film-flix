import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  showMenu: boolean = false;

  handlerMenu = () => {
    this.showMenu = !this.showMenu;
    console.log("SHOW", this.showMenu)
  };
}
