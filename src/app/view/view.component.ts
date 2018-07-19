import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.interface';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  persons:Employee[];
  searchText:string="";
  constructor(private commonService:CommonService){}

  ngOnInit() {
   this.getData();
  }
  getData()
  {
    //ideally this method should send a REST API request to server to get data. But for now, just getting the data from service.
this.persons=this.commonService.getData();
  }
add()
{
  this.commonService.goTo('/employees/add')
}
}
