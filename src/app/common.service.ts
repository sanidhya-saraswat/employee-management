import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Employee } from './employee.interface';

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
      "name": "Ari",
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
getData()
{
  return this.data;
}
}
