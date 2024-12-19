import { Component, OnInit } from '@angular/core';
 
 
@Component({
    selector: 'app-purchase-requisition',
    templateUrl: './purchase-requisition-creation.component.html',
    styleUrls: ['./purchase-requisition-creation.component.css']
})
  export class PurchaseRequisitionCreationComponent {
    requisitionName: string = '';
    documentType: string = '';
    plant: string = '';
    tableData: any[] = [];

    saveData() {
        if (this.documentType && this.plant && this.requisitionName) {
          // Add mock data rows (similar to your table example)
          this.tableData = [
            { bnfpo: '1', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '112', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010', afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
            { bnfpo: '2', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '113', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010', afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
            { bnfpo: '3', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '114', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
            { bnfpo: '4', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '115', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
            { bnfpo: '5', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '116', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
            { bnfpo: '6', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '117', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
            { bnfpo: '7', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '118', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
            { bnfpo: '8', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '119', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
          ];
          
        } else {
          alert('Please fill all fields before saving!');
        }
      }
    }