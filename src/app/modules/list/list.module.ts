import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { ItemModule } from 'src/app/commons/components';
import { JobsService } from 'src/app/core/services';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ItemModule,
    RouterModule,
  ],
  providers: [JobsService]
})
export class ListModule { }
