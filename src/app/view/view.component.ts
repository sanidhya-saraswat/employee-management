import { Component, OnInit } from '@angular/core';
import { CommonService, Employee } from '../common.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  persons: Employee[];
  searchText: string = "";
  isLoadingDone: boolean = false;
  constructor(private commonService: CommonService) { }


  ngOnInit() {
    this.getData();
  }
  getData() {
    //ideally this method should send a REST API request to server to get data. But for now, just getting the data from service.
    this.persons = this.commonService.getAllData();
  }
  add() {
    this.commonService.goTo('/employees/add')
  }
  edit(val) {
    this.commonService.goTo(`employees/${val}/edit`)
  }
}
