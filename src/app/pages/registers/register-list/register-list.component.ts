import { Component, OnInit } from '@angular/core';
import { BillService } from '../../services/bill.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.scss']
})
export class RegisterListComponent implements OnInit {

  public bills: any[] = [];
  public startDate: Date;
  public endDate: Date;
  public paid: Boolean;

  constructor(private billService: BillService) {

  }

  ngOnInit(): void {
    this.findBills();
  }

  findBills() {
    this.billService.findAll().subscribe(
      res => {
        this.bills = res;
      }
    )
  }

}
