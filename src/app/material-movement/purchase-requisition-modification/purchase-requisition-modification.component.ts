import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';  // Add FormArray and FormBuilder
import { CrudService } from 'src/app/core/services/crud.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchase-requisition-modification',
  templateUrl: './purchase-requisition-modification.component.html',
  styleUrls: ['./purchase-requisition-modification.component.css']
})
export class PurchaseRequisitionModificationComponent {
  prNumber: any;
  tableData: any[] = [];
  tableRows: FormArray;  // Change this to FormArray
  rows: string[] = [];
  // expandedRows: any;
  expandedRows: boolean[] = []; 
  documentType: any;

  constructor(private service: CrudService, private fb: FormBuilder,public loaderService:LoaderService) {
    
    // Initialize tableRows as an empty FormArray
    this.tableRows = this.fb.array([]);  // Instantiate FormArray here
    
  }

  addRow() {
    // Ensure tableRows is initialized
    this.tableRows.push(
      this.fb.group({ // Initialize tableRows if not already initialized
      bnfpo: [''],
      AcctAssCat: [''],
      itemcategory: [''],
      matnr: ['', Validators.required],
      stext: [''],
      menge: ['', Validators.required],
      meins: [''],
      lfdat: [''],
      lgort: [''],
      prgrp: ['', Validators.required],
      afnam: [''],
      werks: ['', Validators.required],
      bwtar: ['', Validators.required],
      TRACKINGNO: ['', Validators.required],
      ifdat: [''],
      igort: [''],
      waers: ['', Validators.required]
      })
    );
    this.expandedRows.push(false);  // Add the new row to FormArray

    const newRow = 'New Row';
    this.rows.push(newRow);
  }


  getPRData(): void {
    console.log('Get PR Data button clicked');
    
    if (!this.prNumber) {
      Swal.fire({
        text: 'Please enter a PR number',
        icon: 'error',
        showConfirmButton: true
      });
      return;
    }

    const requestBody = {
      "BANFN": this.prNumber,
    };
this.loaderService.showLoader();
    this.service.changePrMethod(requestBody).subscribe(
      (response: any) => {
        console.log('Full API response:', JSON.stringify(response, null, 2));
        
        if (response.data && response.data[0]) {
          // Clear existing rows first
          this.tableRows.clear();

          response.data[0].ITEM.forEach(item => {
            const group = this.fb.group({
              bnfpo: [item.BNFPO],
              AcctAssCat: [item.AcctAssCat],
              itemcategory: [item.EBELP],
              matnr: [item.MATNR, Validators.required],
              stext: [item.TXZ01],
              menge: [item.MENGE, Validators.required],
              meins: [item.MEINS],
              lfdat: [item.LFDAT, Validators.required],
              igort: ['', Validators.required],
              prgrp: [item.EKGRP, Validators.required],
              afnam: [],
              werks: [item.WERKS, Validators.required],
              bwtar: [item.PREIS, Validators.required],
              TRACKINGNO: [],
              waers: [item.WAERS],
            });
            this.tableRows.push(group);
          });
          this.loaderService.hideLoader();
        } else {
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

  removeRow(index: number): void {
    // Ensure there's at least one row left
    if (this.tableRows.length > 1) {
      this.tableRows.removeAt(index); // Use removeAt correctly with FormArray
    }
  }

  // Check if a specific field is invalid
  isFieldInvalid(fieldName: string, rowIndex: number = 0): boolean {
    const row = this.tableRows.at(rowIndex);
    return row?.get(fieldName)?.invalid && row?.get(fieldName)?.touched;
  }

  // Save data from the form
  saveData(): void {
    console.log('Save button clicked');
    
    // Proceed with the process if tableRows has data
    const reqBody = {
      "HEADER": {
        "BANFN": this.prNumber,
        "BSART": "VNB" // Ensure BSART is correctly populated or removed
      },
      "ITEM": this.tableRows.controls.map((row: FormGroup) => {
        console.log('row data', row);
        return {
          "EBELP": row.get('itemcategory')?.value,  // Make sure field names are correct
          "MATNR": row.get('matnr')?.value,
          "TXZ01": row.get('stext')?.value,
          "MENGE": row.get('menge')?.value,
          "MEINS": row.get('meins')?.value,
          "LFDAT": row.get('lfdat')?.value,
          "WERKS": row.get('werks')?.value,
          "EKGRP": row.get('prgrp')?.value,
          "PREIS": row.get('bwtar')?.value,
          "WAERS": row.get('waers')?.value, // Correct field name
        };
      })
    };
  
    console.log('Payload sent to backend:', reqBody);
  
    // Proceed with the service call
    this.service.changePrMethod(reqBody).subscribe((response:any) => {
      console.log('response', response.data);
      const resp = response.data;
      if (resp && Array.isArray(resp) && resp[0] && resp[0].MSGTXT) {
        Swal.fire({
          text: resp[0].MSGTXT,
          icon: 'success',
          showConfirmButton: true
        });
        // resp.data[0].,
        this.prNumber = '';
        this.tableRows.clear();  // Clear FormArray correctly
        this.addRow(); // Add a new row after saving
      } else {
       
        Swal.fire({
          text: 'Failed to create PR',
          icon: 'error',
          showConfirmButton: true
        });
        
        this.prNumber = '';
        this.tableRows.clear();  // Clear FormArray correctly
        this.addRow(); // Add a new row even after failure
      }
    }, (error) => {
      console.error('Error saving data:', error);
      Swal.fire({
        text: 'An error occurred while saving data',
        icon: 'error',
        showConfirmButton: true
      });
    });
  }
  
}
