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
    const reqBody = this.tableRows.controls.map((row: FormGroup) => {
      console.log('row data',row)
      return {
        BSART: this.documentType, // Assuming documentType is a class-level property
        MATNR: row.get('matnr')?.value, // Material number
        MENGE: row.get('menge')?.value, // Quantity
        WERKS:row.get('werks')?.value, // Plant
        EKGRP: row.get('prgrp')?.value, // Purchasing group
        PREIS: row.get('bwtar')?.value, // Valuation price
        WAERS: 'USD', // Assuming currency is fixed as 'USD'
      };
    }); 
  
    console.log('Payload sent to backend:', reqBody);
  
 this.service.purchaseCreate(reqBody).subscribe((response)=>{
console.log('response',response)
const resp =response.data[0];
if(resp){
  Swal.fire({
    text:resp.MESSAGE,
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

 })
    
    // Reset the form after saving
    // this.purchaseRequisitionForm.reset();
    // this.requisitionName = '';
    // this.documentType = '';
    // this.plant = '';
    // this.tableRows.clear();
    // this.addRow(); // Add a new row for next entry
  }
}  