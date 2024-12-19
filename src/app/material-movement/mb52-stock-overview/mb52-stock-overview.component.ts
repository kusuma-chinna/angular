import { Component } from '@angular/core';

@Component({
  selector: 'app-mb52-stock-overview',
  templateUrl: './mb52-stock-overview.component.html',
  styleUrl: './mb52-stock-overview.component.css'
})
export class MB52StockOverviewComponent {
  material: string = '';
  plant: string = '';
  storagelocation: string = '';
  batch: string = '';
  
  tableData: Array<any> = []; // Holds data for the table display

  constructor() {}

  // Method triggered by the Get Data button
  getData(): void {
    // Mock data fetching. Replace with actual API call if necessary.
    this.tableData = [
      {
        material: this.material,
        materialDescription: '',
        plant: this.plant,
        location: this.storagelocation,
        materialNo: '',
        batch: this.batch,
        salesOrder: '',
        soItem: '',
        bUoM: '',
        unrestricted: '',
        valueUnrestricted:'',
        blockStock: '',
        valueBlockStock: '',
        qualityStock: '',
        valueQualityStock: ''
      },
      // {
      //   material: 'MAT002',
      //   materialDescription: 'Another Material Description',
      //   plant: 'PLANT02',
      //   location: 'LOC02',
      //   materialNo: 'MAT002',
      //   batch: 'BATCH02',
      //   salesOrder: 'SO12346',
      //   soItem: '20',
      //   bUoM: 'L',
      //   unrestricted: 50,
      //   valueUnrestricted: 2500,
      //   blockStock: 5,
      //   valueBlockStock: 100,
      //   qualityStock: 10,
      //   valueQualityStock: 500
      // }
    ];
  }
}


