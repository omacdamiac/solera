import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ListModule } from '../list/list.module';
import { MainService } from 'src/app/core/services';
import { FormModule, HeaderModule } from 'src/app/layout';
import { Interceptor } from 'src/app/core/interceptors/interceptor.interceptor';
import { LoaderModule } from 'src/app/commons/components';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    FormModule,
    HttpClientModule,
    ListModule,
    LoaderModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    MainService]
})
export class DashboardModule { }
