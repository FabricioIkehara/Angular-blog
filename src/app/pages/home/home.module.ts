import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';  // Certifique-se de que o caminho está correto

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,

  ],
  exports: [
    HomeComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
