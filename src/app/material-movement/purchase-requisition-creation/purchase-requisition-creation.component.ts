import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { options } from '@fullcalendar/core/preact';
import { CrudService } from 'src/app/core/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchase-requisition-creation',
  templateUrl: './purchase-requisition-creation.component.html',
  styleUrls: ['./purchase-requisition-creation.component.css'],
})
export class PurchaseRequisitionCreationComponent {
  purchaseRequisitionForm: FormGroup;
  rows: string[] = [];
  requisitionName: any;
  documentType: any;
  plant: any;
  standalone: true;

  expandedRows: boolean[] = [];
  loaderService: any;

  constructor(private fb: FormBuilder,private service: CrudService) {
    this.purchaseRequisitionForm = this.fb.group({
      requisitionDetails: this.fb.array([]), // Initialize requisitionDetails as an empty FormArray
    });

    // Add an initial row
    this.addRow();
  }

  // Getter for table rows FormArray
  get tableRows(): FormArray {
    return this.purchaseRequisitionForm.get('requisitionDetails') as FormArray;
  }

  // Create a form group for each row in the table
  addRow() {
    this.tableRows.push(
      this.fb.group({
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
        ifdat:[''],
        igort:['']
      })
    );
    this.expandedRows.push(false); // Initialize expanded state for new row

    const newRow = 'New Row'; // You can customize the row content here
    this.rows.push(newRow);
  }

  

  // Remove a row from the table
  removeRow(index: number): void {
    // Ensure there's at least one row left
    if (this.tableRows.length > 1) {
      this.tableRows.removeAt(index); // Remove the row at the specified index
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
    // this.loaderService.showLoader();
    // const reqBody = this.tableRows.controls.map((row: FormGroup) => {
    //   console.log('row data',row)
    //   return {
    const reqBody = {      
      "BSART": "VNB",  
          
    "ITEM": 
      this.tableRows.controls.map((row: FormGroup) => {
      console.log('row data', row);
      return {
        "BNFPO": row.get('pritem')?.value,
        "MATNR": row.get('matnr')?.value,
        "MENGE": row.get('menge')?.value,
        "WERKS": row.get('werks')?.value,
        "EKGRP": row.get('prgrp')?.value,
        "PREIS": row.get('bwtar')?.value,
        "WAERS": "USD"
      };
    })
  
  };
  
    console.log('Payload sent to backend:', reqBody);
    // this.loaderService.showLoader();
 this.service.purchaseCreate(reqBody).subscribe((response)=>{
console.log('response',response.data)
const resp =response.data;
if (resp && Array.isArray(resp) && resp[0] && resp[0].MSGTXT) {
  Swal.fire({
    text:resp[0].MSGTXT,
    icon:'success',
    showConfirmButton:true
  })

    this.purchaseRequisitionForm.reset();
    this.requisitionName = '';
    this.documentType = '';
    this.plant = '';
    this.tableRows.clear();
    this.addRow(); 
}else{
  Swal.fire({
    text:'Failed to create PR',
    icon:'error',
    showConfirmButton:true
  })
  this.purchaseRequisitionForm.reset();
    this.requisitionName = '';
    this.documentType = '';
    this.plant = '';
    this.tableRows.clear();
    this.addRow();
}
// this.loaderService.hideLoader();
 })
    
    // Reset the form after saving
    this.purchaseRequisitionForm.reset();
    this.requisitionName = '';
    this.documentType = '';
    this.plant = '';
    this.tableRows.clear();
    this.addRow(); // Add a new row for next entry
  }
}