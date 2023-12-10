import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from '../../angularblog/component/menu-title/menu-title.component';
import { BigCardComponent } from '../../angularblog/component/big-card/big-card.component';
import { SmallCardComponent } from '../../angularblog/component/small-card/small-card.component';
import { MenuBarComponent } from '../../angularblog/component/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  photoCover:string=""
  contentTitle:string=""
  contentDescription:string=""

constructor(){ }

ngOnInit(): void {

}
}
