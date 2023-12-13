
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from './component/big-card/big-card.component';
import { SmallCardComponent } from './component/small-card/small-card.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './component/menu-title/menu-title.component';
import { HomeComponent } from '../pages/home/home.component';
import { HomeModule } from '../pages/home/home.module';






@NgModule({
  declarations: [MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    HomeComponent
  ],
  imports: [AngularblogModule,
    CommonModule, HomeModule]

})
export class AngularblogModule { }
