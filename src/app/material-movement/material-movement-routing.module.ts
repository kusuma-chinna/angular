import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseRequisitionCreationComponent } from './purchase-requisition-creation/purchase-requisition-creation.component';
import { PurchaseRequisitionModificationComponent } from './purchase-requisition-modification/purchase-requisition-modification.component';
import { ListOfPurchaserequisitionComponent } from './list-of-purchaserequisition/list-of-purchaserequisition.component';
import { MB52StockOverviewComponent } from './mb52-stock-overview/mb52-stock-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: PurchaseRequisitionCreationComponent
  },
  {
    path: 'purchaserequistioncreation',
    component: PurchaseRequisitionCreationComponent
  },
  { path: 'material-movement', loadChildren: () => import('./material-movement.module').then(m => m.MaterialMovementModule) },

  {
    path: "",
    component: PurchaseRequisitionModificationComponent
  },
  {
    path: 'purchaserequistionmodification',
    component: PurchaseRequisitionModificationComponent
  },
  { path: 'material-movement', loadChildren: () => import('./material-movement.module').then(m => m.MaterialMovementModule) },

  {
    path: "",
    component: ListOfPurchaserequisitionComponent
  },
  {
    path: 'listofpurchaserequisitioncomponent',
    component: ListOfPurchaserequisitionComponent
  },
  { path: 'material-movement', loadChildren: () => import('./material-movement.module').then(m => m.MaterialMovementModule) },
  {
    path: "",
    component: MB52StockOverviewComponent
  },
  {
    path: 'mb52-stock-overviewcomponent',
    component: MB52StockOverviewComponent
  },
  { path: 'material-movement', loadChildren: () => import('./material-movement.module').then(m => m.MaterialMovementModule) },

  {
    path: "",
    component: DashboardComponent
  },
  {
    path: 'dashboard-component',
    component: DashboardComponent
  },
  { path: 'material-movement', loadChildren: () => import('./material-movement.module').then(m => m.MaterialMovementModule) },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialMovementRoutingModule { }
