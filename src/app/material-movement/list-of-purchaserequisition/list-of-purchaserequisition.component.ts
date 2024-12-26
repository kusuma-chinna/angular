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
          purchaserequisitionnumber: '123456',
          bnfpo: '1',
          AcctAssCat: 'A',
          itemcategory: 'B',
          matnr: '1000011852',
          stext: 'NICKEL ANODE',
          menge: '12345',
          meins: 'KG',
          iffat: '30.10.2024',
          igort: 'S016',
          prgrp: '010',
          afnan: 'ABS',
          werks: '1100',
          bwtar: 'RM-DOM',
          trackingno: '12345',
        }
      ];
      
    }  
  // else {
  //   alert('Please fill all fields before saving!');
  // }
}