import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { BillService } from '../../services/bill.service';
import toastr from 'toastr';

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

  constructor(
    private billService: BillService,
    private confirmationService: ConfirmationService
  ) { }

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

  deleteBill(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this bill?',
      accept: () => {
        this.billService.deleteById(id).subscribe(
          () => {
            toastr.success('Bill was deleted successfully!')
            this.findBills();
          }
        );
      }
    });
  }

  payTheBill(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to pay this bill?',
      accept: () => {
        toastr.success('Bill was payed successfully!')
        this.findBills();
      }
    });
  }

}
