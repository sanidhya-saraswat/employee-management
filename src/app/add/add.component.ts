import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private commonService:CommonService) { }
addForm:FormGroup;
  ngOnInit() {
    this.addForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.pattern(/^.{4,}$/)]),
      phone: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]+$/)]),
      city: new FormControl(''),
      addressLine1: new FormControl(''),
      addressLine2: new FormControl(''),
      postalCode: new FormControl('')
     }); 
  }
onFormSubmit()
{
//Ideally a REST API HTTP POST request should be sent to the server to save the data. But for now, just a temporary solution.
this.commonService.saveEmployee(this.addForm.value);
this.commonService.goTo('');
}
goBack()
{
  this.commonService.goTo('')
}
}
