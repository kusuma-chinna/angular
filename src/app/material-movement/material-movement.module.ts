import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialMovementRoutingModule } from './material-movement-routing.module';
import { PurchaseRequisitionCreationComponent } from './purchase-requisition-creation/purchase-requisition-creation.component';
import { PurchaseRequisitionModificationComponent } from './purchase-requisition-modification/purchase-requisition-modification.component';
import { ListOfPurchaserequisitionComponent } from './list-of-purchaserequisition/list-of-purchaserequisition.component';
import { MB52StockOverviewComponent } from './mb52-stock-overview/mb52-stock-overview.component';


@NgModule({
  declarations: [
    PurchaseRequisitionCreationComponent,
    PurchaseRequisitionModificationComponent,
    ListOfPurchaserequisitionComponent,
    MB52StockOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialMovementRoutingModule
  ]
  
})
export class MaterialMovementModule { }
