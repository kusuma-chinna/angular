import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { LoaderService } from 'src/app/core/services/loader.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-mb52-stock-overview',
  templateUrl: './mb52-stock-overview.component.html',
  styleUrls: ['./mb52-stock-overview.component.css']
})
export class MB52StockOverviewComponent {
  material: string = '';
  plant: string = '';
  storagelocation: string = '';
  batch: string = '';
  matnr: string;

  tableData: any; // Holds data for the table display
  // mb52table: any;
  mb52table: any[] = []; // Initialize arrays to avoid undefined errors


  constructor(private service: CrudService, private fb: FormBuilder,public loaderService:LoaderService) {
    this.tableData = this.fb.array([]);
  }

  // Method triggered by the Get Data button
  getData() {
    console.log('Get Stock Data button clicked');

   

    const requestBody = {
      "WERKS": this.plant, // Plant
      "MATNR": this.material, // Material
      "LGORT": this.storagelocation, // Storage Location
      "MATART": this.batch // Batch
    };
    this.loaderService.showLoader();
    // Make the service call
    this.service.fetchMb52Data(requestBody).subscribe(
      (response: any) => {
        console.log('Full API response:', response);

        // Check and process the API response
        if (response && Array.isArray(response.data)) {
          this.mb52table = response.data;
          this.loaderService.hideLoader();
        } else {
          Swal.fire({
            text: 'No items found or invalid data structure.',
            icon: 'error',
            showConfirmButton: true
          });
          this.tableData = []; // Reset table data if response is invalid
        }
      },
      (error) => {
        console.error('Error fetching Stock data:', error);
        Swal.fire({
          text: 'An error occurred while fetching Stock data',
          icon: 'error',
          showConfirmButton: true
        });
      }
    );
  }
}
