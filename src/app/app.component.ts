import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './angularblog/component/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './angularblog/component/menu-title/menu-title.component';
import { BigCardComponent } from './angularblog/component/big-card/big-card.component';
import { SmallCardComponent } from './angularblog/component/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularblog';
}
