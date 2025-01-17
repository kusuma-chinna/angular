import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pr-approval',
  templateUrl: './pr-approval.component.html',
  styleUrls: ['./pr-approval.component.css']
})
export class PrApprovalComponent implements OnInit {
  tableData: any[] = []; 
  
 
  // prApprovalMethod: string;
  allSelected: any;
  constructor(private http: HttpClient,private service: CrudService ) {}
  ngOnInit(): void {
    this.getTableData(); // Fetch data when the component is initialized
  }
 
  // Table data
  getTableData(): void {
    this.service.prApprovalListMethod().subscribe((response: any) => {
      console.log('response',response)
      this.tableData = response.data
    })
   
  }


  // Method to select/deselect all rows
  selectAll(event: any): void {
    this.allSelected = event.target.checked;
    this.tableData.forEach((row) => {
      row.isSelected = this.allSelected; // Update each row's selection state
    });
  }

  // Row selection logic (example logic)
  onRowSelect(row: any): void {
    console.log('Row selected:', row);
  }

  // Example action methods for Approve/Reject
  approve(row: any): void {
    console.log('Approved row:', row);
  
    const reqBody = {
      RELEASE: {
      BANFN: row.BANFN, // Access the property directly
      BNFPO: row.BNFPO,   // Access the property directly
      }
    };
  
    
  
    console.log('Payload sent to backend:', reqBody);
  
    Swal.fire({
      title: 'Do you want to approve this item?',
      text: 'You will not be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, approve it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the approve action
        this.service.prApprovalMethod(reqBody).subscribe(
          (response: any) => {
            console.log('Response:', response); // Log the backend response
            const resp = response.data[0];
            console.log('message',response.data[0])
      
            if (resp.STATUS==='TRUE') {
              // Swal.fire('Approved!', 'The item has been approved successfully.', 'success');
              Swal.fire({
                text:response.data[0].MSGTXT,
                icon:'success',
                confirmButtonText:'ok'
              })
              this.getTableData();
              
            } else {
              Swal.fire('Error!', 'The backend did not confirm the approval. Check logs.', 'error');
            }
          },
          (error) => {
            Swal.fire('Error!', 'Failed to approve the item. Please try again.', 'error');
            console.error('Approval error:', error);
          }
        );
        
      }
    });
  }
  

  reject(row: any): void {
    console.log('Rejected row index:', row);
  }
}
