import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { options } from '@fullcalendar/core/preact';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-purchase-requisition-creation',
  templateUrl: './purchase-requisition-creation.component.html',
  styleUrls: ['./purchase-requisition-creation.component.css'],
})
export class PurchaseRequisitionCreationComponent {
  purchaseRequisitionForm: FormGroup;
  rows: string[] = [];
  requisitionName: string;
  documentType: string;
  plant: string;
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
        bnfpo: ['', Validators.required],
        AcctAssCat: [''],
        itemcategory: [''],
        matnr: ['', Validators.required],
        stext: ['', Validators.required],
        menge: ['', Validators.required],
        meins: ['', Validators.required],
        lfdat: ['', Validators.required],
        lgort: ['', Validators.required],
        prgrp: ['', Validators.required],
        afnam: ['', Validators.required],
        werks: ['', Validators.required],
        bwtar: ['', Validators.required],
        TRACKINGNO: ['', Validators.required],
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
    
    // Construct the payload for the backend
    const refBody = this.tableRows.value.map((row: any) => ({
      BSART: this.documentType, // Map your fields to match the payload structure
      MATNR: row.matnr,
      MENGE: row.menge,
      WERKS: row.werks,
      EKGRP: row.prgrp,
      PREIS: row.preis || '300', // Example price field, add it if needed
      WAERS: row.waers || 'USD', // Example currency field, add it if needed
    }));
  
    console.log('Payload sent to backend:', refBody);
  
    this.service.postPurchaseCreate(refBody, options).subscribe({
      next: (response) => {
        console.log('Response from backend:', response);
        alert('Purchase successfully created!');
      },
      error: (err) => {
        console.error('Error while creating purchase:', err);
        alert(`Failed to create purchase. Status: ${err.status}, Message: ${err?.error?.message || err.message || 'Unknown error'}`);

      },
    });
    
    // Reset the form after saving
    this.purchaseRequisitionForm.reset();
    this.requisitionName = '';
    this.documentType = '';
    this.plant = '';
    this.tableRows.clear();
    this.addRow(); // Add a new row for next entry
  }
}  