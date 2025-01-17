import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Bar Chart Data
  public barChartOptions = {
    responsive: true,
  };
  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  public barChartData = [
    { data: [65, 59, 80, 81, 56], label: 'Requisitions Created' },
    { data: [28, 48, 40, 19, 86], label: 'Requisitions Modified' },
  ];
  public barChartType = 'bar';

  // Pie Chart Data
  public pieChartOptions = {
    responsive: true,
  };
  public pieChartLabels = ['Stock Available', 'Stock Reserved', 'Stock Deficit'];
  public pieChartData = [300, 500, 200];
  public pieChartType = 'pie';
}
