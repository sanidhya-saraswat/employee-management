import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee, CommonService } from '../common.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute,private commonService:CommonService) { }
editForm;
id;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getData();
    });
  }
getData()
{
  //Ideally we should get the data from server. But for now, just getting the data from service.
let emp:Employee=this.commonService.getData(this.id);
  this.editForm = new FormGroup({
    id:new FormControl(emp.id+''),
    name:new FormControl(emp.name,[Validators.required,Validators.pattern(/^.{4,}$/)]),
    phone: new FormControl(emp.phone,[Validators.required,Validators.pattern(/^[0-9]+$/)]),
    city: new FormControl(emp.address.city),
    addressLine1: new FormControl(emp.address.address_line1),
    addressLine2: new FormControl(emp.address.address_line2),
    postalCode: new FormControl(emp.address.postal_code)
   }); 
}
onFormSubmit()
{
this.commonService.editEmployee(this.editForm.value);
this.commonService.goTo('');
}
goBack()
{
  this.commonService.goTo('')
}
}
