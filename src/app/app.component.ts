import {Component, OnInit} from '@angular/core';
import CustomerDTO from "./CustomerDTO";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  customerArray:CustomerDTO[]=[];

  ngOnInit(): void {

    this.customerArray.push(
      new CustomerDTO('001','Nimal')
    );
    this.customerArray.push(
      new CustomerDTO('002','Banadara')
    );
    this.customerArray.push(
      new CustomerDTO('003','Samantha')
    );

  }
}
