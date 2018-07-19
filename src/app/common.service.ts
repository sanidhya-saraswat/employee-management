import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient} from '@angular/common/http';
export class Employee {
  id: number;
  name: string;
  phone: string;
  address:Address;
}
class Address
{
  city: string;
  address_line1:string;
  address_line2:string;
  postal_code:string;
}
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  testingURL:string=environment.testingURL;
data:Employee[];
id:number=4;
  constructor(private http: HttpClient, private router: Router) {
    this.data=[{
      "id": 1,
      "name": "Jhon",
      "phone": "9999999999",
      "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":"12455"
      }
      }, {
      "id": 2,
      "name": "Jacob",
      "phone": "AZ99A99PQ9",
      "address":
      {
      "city": "Pune",
      "address_line1":"PQR road",
      "address_line2":"ABC building",
      "postal_code":"13455"
      }
      }, {
      "id": 3,
      "name": "Arijit",
      "phone": "145458522",
      "address":
      {
      "city": "Mumbai",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":"12455"
      }
      }]
     
  }

  goTo(str) {
    this.router.navigate([str]);
  }
getAllData()
{
  return this.data;
}
getData(id)
{

  return this.data.filter(obj=>{
    return obj.id==id;
  })[0];
}
saveEmployee(data)
{

  //ideally THIS WILL NOT BE DONE. The request will be sent to a server to save the data.
  var employee= new Employee();
  employee.name=data.name;
  employee.phone=data.phone;
  employee.id=this.id;  
  this.id++;
  employee.address=new Address();
  employee.address.address_line1=data.addressLine1;
  employee.address.address_line2=data.addressLine2;
  employee.address.postal_code=data.postalCode;
  employee.address.city=data.city;
  this.data.push(employee);
}
editEmployee(data)
{
  //ideally THIS WILL NOT BE DONE. The request will be sent to a server to edit the data.
  var employee=this.data.filter(obj=>{
    return obj.id==data.id;
  })[0];
  employee.name=data.name;
  employee.phone=data.phone;
  employee.address=new Address();
  employee.address.address_line1=data.addressLine1;
  employee.address.address_line2=data.addressLine2;
  employee.address.postal_code=data.postalCode;
  employee.address.city=data.city;
}
}
