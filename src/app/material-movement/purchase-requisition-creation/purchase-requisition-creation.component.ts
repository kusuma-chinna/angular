import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
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
        bnfpo: ['1', Validators.required],
        AcctAssCat: ['A'],
        itemcategory: ['B'],
        matnr: ['1000011852', Validators.required],
        stext: ['NICKEL ANODE 42278', Validators.required],
        menge: ['112', Validators.required],
        meins: ['KG', Validators.required],
        lfdat: ['30-10-2024', Validators.required],
        lgort: ['S016', Validators.required],
        prgrp: ['010', Validators.required],
        afnam: ['ABS', Validators.required],
        werks: ['1100', Validators.required],
        bwtar: ['RM-DOM', Validators.required],
        TRACKINGNO: ['12345', Validators.required],
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
      const PurchaseCreate = {
        requisitionName: this.requisitionName,
        documentType: this.documentType,
        plant: this.plant,
      
      };
      const refBody =  {
        data :this.purchaseRequisitionForm.value.requisitionDetails,
      }
      

      console.log('Saved Data:', PurchaseCreate);
       this.service.postPurchaseCreate(refBody).subscribe((res: any) => {
        console.log('res',res)

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