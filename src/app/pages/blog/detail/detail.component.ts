import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone:true,
  imports:[CommonModule,PagetitleComponent,TabsModule,RouterModule,TooltipModule]
})
export class DetailComponent implements OnInit {

 // bread crumb items
 breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Blog' }, { label: 'Blog Details', active: true }];

  }

}
