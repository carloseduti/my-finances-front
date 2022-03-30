import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { BillService } from '../../../services/bill.service';
import toastr from 'toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.scss'],
})
export class RegisterListComponent implements OnInit {

  bills: any[] = [];
  startDate: Date;
  endDate: Date;
  paid: Boolean;
  displayResponsive: boolean;
  billSelected: any;


  constructor(
    private billService: BillService,
    private confirmationService: ConfirmationService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.findBills();
  }

  findBills() {
    this.billService.findAll(this.auth.getIdUser()).subscribe((res) => {
      this.bills = res;
    });
  }

  deleteBill(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this bill?',
      accept: () => {
        this.billService.deleteById(id).subscribe(() => {
          toastr.success('Bill was deleted successfully!');
          this.findBills();
        });
      },
    });
  }

  payTheBill(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to pay this bill?',
      accept: () => {
        toastr.success('Bill was payed successfully!');
        this.findBills();
      },
    });
  }

  showResponsiveDialog(bill : any) {
    this.displayResponsive = true;
    this.billSelected = bill;
  }

}
