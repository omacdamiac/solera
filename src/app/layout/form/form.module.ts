import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, InputModule } from 'src/app/commons/components';

@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
