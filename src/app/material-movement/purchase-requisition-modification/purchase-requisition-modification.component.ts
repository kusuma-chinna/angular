import { Component } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-purchase-requisition-modification',
  templateUrl: './purchase-requisition-modification.component.html',
  styleUrl: './purchase-requisition-modification.component.css'
})
export class PurchaseRequisitionModificationComponent {
  prNumber: any;
  tableData: any[] = [];


  constructor(private service:CrudService){

  }
  // getData() {
  //     if (this.prNo) {
  //       // Add mock data rows (similar to your table example)
  //       this.tableData = [
  //         { bnfpo: '1', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '112', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010', afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
  //         { bnfpo: '2', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '113', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010', afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
  //         { bnfpo: '3', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '114', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
  //         { bnfpo: '4', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '115', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
  //         { bnfpo: '5', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '116', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
  //         { bnfpo: '6', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '117', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
  //         { bnfpo: '7', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '118', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
  //         { bnfpo: '8', matnr: '1000011852', stext: 'NICKEL ANODE 42278', menge: '119', meins: 'KG', lfdat: '30.10.2024', lgort: 'S016',prgrp:'010',afnam: 'ABS', werks: '1100', bwtar: 'RM-DOM', trackingNo: '12345' },
  //       ];
        
  //     } else {
  //       alert('Please fill all fields before saving!');
  //     }
  //   }

getPRData(){
  const requestBody ={
    "BANFN":this.prNumber
  }
  this.service.changePR(requestBody).subscribe((resp:any)=>{

    this.tableData=resp.data['ITEM']
    console.log('tableData',this.tableData)
  })
}

  }


