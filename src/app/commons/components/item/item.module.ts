import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [
    ItemComponent
  ]
})
export class ItemModule { }
