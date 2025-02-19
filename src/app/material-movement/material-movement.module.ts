import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialMovementRoutingModule } from './material-movement-routing.module';
import { PurchaseRequisitionCreationComponent } from './purchase-requisition-creation/purchase-requisition-creation.component';
import { PurchaseRequisitionModificationComponent } from './purchase-requisition-modification/purchase-requisition-modification.component';
import { ListOfPurchaserequisitionComponent } from './list-of-purchaserequisition/list-of-purchaserequisition.component';
import { MB52StockOverviewComponent } from './mb52-stock-overview/mb52-stock-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PrApprovalComponent } from './pr-approval/pr-approval.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    PurchaseRequisitionCreationComponent,
    PurchaseRequisitionModificationComponent,
    ListOfPurchaserequisitionComponent,
    MB52StockOverviewComponent,
    DashboardComponent,
    PrApprovalComponent

    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMovementRoutingModule,
    HttpClientModule,
    NgChartsModule     
    
    
    
  ]
  
})
export class MaterialMovementModule { }
