import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component'; // Ensure correct path

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, PagetitleComponent], // Add PagetitleComponent here
})
export class DefaultComponent {
  productNumber: string = '';
  outputProductData: any = null;

  breadCrumbItems: Array<{}> = [
    { label: 'Dashboard' },
    { label: 'Default', active: true },
  ];

  private productData = {
    P123: { plant: 'Plant A', sloc: 'SLOC-001', productNumber: 'P123', materialCode: 'M123', uom: 'KG' },
    P124: { plant: 'Plant B', sloc: 'SLOC-002', productNumber: 'P124', materialCode: 'M124', uom: 'L' },
    P125: { plant: 'Plant C', sloc: 'SLOC-003', productNumber: 'P125', materialCode: 'M125', uom: 'PCS' },
  };

  getData() {
    this.outputProductData = this.productData[this.productNumber];

    if (!this.outputProductData) {
      alert('No data found for the provided product number.');
    }
  }
  saveData() {
    if (!this.outputProductData) {
      alert('No product data to save. Please provide a valid product number.');
      return;
    }
  
    // Additional validation logic (optional)
    if (!this.outputProductData.name || !this.outputProductData.price) {
      alert('Please make sure all required fields are filled.');
      return;
    }
  
    // Logic to save the data
    console.log('Saving data...', this.outputProductData);
    alert('Product data saved successfully!');
  }
  
}
