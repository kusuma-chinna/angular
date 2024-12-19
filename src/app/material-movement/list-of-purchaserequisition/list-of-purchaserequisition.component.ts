import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-purchaserequisition',
  templateUrl: './list-of-purchaserequisition.component.html',
  styleUrl: './list-of-purchaserequisition.component.css'
})
export class ListOfPurchaserequisitionComponent {
    // Input fields for the form
    documentType: string = '';
    plant: string = '';
    purchaseRequisition: string = '';
    material: string = '';
    deliveryDate: string = '';
    requisitioner: string = '';
  
    // Data to populate the table
    tableData: any[] = [];
  
    // Example data for demonstration
    getData(): void {
      // Here you can add logic to fetch data from an API or service.
      // Currently, we are adding static mock data for the table.
      this.tableData = [
        {
          purchaserequisitionnumber: '1',
          purchaserequisitionitem: '1',
          AcctAssCat: 'A',
          itemcategory: 'B',
          materialno: '1000011852',
          shorttext: 'NICKEL ANODE',
          purchaserequisition: '12345',
          UOM: 'KG',
          itemdelivery: '30.10.2024',
          storagelocation: 'S016',
          purchasinggroup: '010',
          requisitionname: 'ABS',
          plant: '1100',
          valuationtype: 'RM-DOM',
        }
      ];
      
    }  
  // else {
  //   alert('Please fill all fields before saving!');
  // }
}