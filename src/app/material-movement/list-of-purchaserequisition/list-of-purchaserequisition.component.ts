import { Component } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { CrudService } from 'src/app/core/services/crud.service';
import { LoaderService } from 'src/app/core/services/loader.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-of-purchaserequisition',
  templateUrl: './list-of-purchaserequisition.component.html',
  styleUrls: ['./list-of-purchaserequisition.component.css']
})
export class ListOfPurchaserequisitionComponent {
  requisitioner: any;
  deliveryDate: any;
  material: any;
  purchaseRequisition: any;
  plant: any;
  documentType: any; 
  tableData: any;
  // tableData: any[] = [];

  bsart: any;
  werks: any;
  banfn: any;
  matnr: any;
  eeind: any;
  listofpurchase: any = [];
  // loaderService: any;
  // afnam: any;
  // tableRows: any;
  
 

  // Data to populate the table
  

  constructor(private service: CrudService, private fb: FormBuilder, public loaderService:LoaderService) {
    this.tableData = this.fb.array([]);
  }

  // Example data for demonstration
  getData(): void {
    console.log('Get PR Data button clicked');
  
    const missingFields: string[] = [];

    // Check each field and add missing ones to the array
    if (!this.documentType) missingFields.push('Document Type');
    if (!this.plant) missingFields.push('Plant');
    if (!this.purchaseRequisition) missingFields.push('Purchase Requisition');
    if (!this.material) missingFields.push('Material');
    if (!this.deliveryDate) missingFields.push('Delivery Date');
    
    // If there are missing fields, show the error message
    if (missingFields.length > 0) {
      Swal.fire({
        text: `Please enter : ${missingFields.join(', ')}`,
        icon: 'error',
        showConfirmButton: true
      });
      return;
    }
    
  
    const requestBody = {
      "BSART": this.documentType,
      "WERKS": this.plant,
      "BANFN": this.purchaseRequisition,
      "MATNR": this.material,
      "EEIND": this.deliveryDate,
      // "AFNAM": this.requisitioner 
    };
    this.loaderService.showLoader();
    this.service.purchaseListMethod(requestBody).subscribe(
      (response: any) => {
        console.log('Full API response:', response);
    
        // Modify this check based on the actual structure of your API response
        if (response && Array.isArray(response.data)) {
          // this.tableData.clear();
          this.listofpurchase = response.data
         this.loaderService.hideLoader();
          
        } else {
          Swal.fire({
            text: 'No items found or invalid data structure.',
            icon: 'error',
            showConfirmButton: true
          });
          this.tableData = []; // Set as empty if data is invalid
        }
       
      },
      (error) => {
        console.error('Error fetching PR data:', error);
        Swal.fire({
          text: 'An error occurred while fetching PR data',
          icon: 'error',
          showConfirmButton: true
        });
      }
    );
  }
}    
    