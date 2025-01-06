import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })

export class CrudService {
    constructor(private http: HttpClient) { }

    /***
     * Get 
     */
    fetchData(url: any): Observable<any[]> {
        console.log(url);
        return this.http.get<any[]>(url);
    }

    addData(url: any, newData: any): Observable<any[]> {
        return this.http.post<any[]>(url, newData);
    }

    updateData(url: any, updatedData: any): Observable<any[]> {
        return this.http.put<any[]>(url, updatedData);
    }

    deleteData(url: any): Observable<void> {
        return this.http.delete<void>(url);
    }
    // getSalesReport(data: any): Observable<any> {
    //     return this.http.post<any>('http://localhost:3000/api/sales-report', data);
    //   }
  

      purchaseCreate(data: any): Observable<any> {
        return this.http.post(`${environment.apiUrl}purchase/create`, data);
      }
      changePR(data: any){
        return this.http.post(`${environment.apiUrl}purchase/change`, data);

      }
      
      
}
