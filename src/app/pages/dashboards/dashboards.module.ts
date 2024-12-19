import { NgModule } from '@angular/core';
// import { DashboardsRoutingModule } from './dashboards-routing.module';
import { BsDropdownConfig} from 'ngx-bootstrap/dropdown';
import { SampleComponentComponent } from './default/sample-component/sample-component.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SampleComponentComponent
  ],
  imports: [
    // DashboardsRoutingModule,
    CommonModule,
  ],
  providers: [BsDropdownConfig],
})
export class DashboardsModule { }
