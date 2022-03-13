import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import toastr from 'toastr';
import { BillService } from '../../services/bill.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public categories: any[] = []
  public times: any[] = []
  public timeSelect: any;
  public val: number;
  public dueDate: Date;
  public fixedBill: boolean;
  public billTypes: any[] = [];

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private billService: BillService
  ) {

    this.times = [
      { name: 'Select the installments..', code: null },
      { name: '1x', portion: 1 },
      { name: '2x', portion: 2 },
      { name: '3x', portion: 3 },
      { name: '4x', portion: 4 },
      { name: '5x', portion: 5 },
      { name: '6x', portion: 6 },
      { name: '7x', portion: 7 },
      { name: '8x', portion: 8 },
      { name: '9x', portion: 9 },
      { name: '10x', portion: 10 },
    ];

    this.billTypes = [
      { name: 'Select the type..', code: null },
      { name: 'Fixed', code: 'FIXED' },
      { name: 'New', code: 'NEW' },
      { name: 'Installment', code: 'INSTALLMENT' }
    ]
  }

  ngOnInit(): void {
    this.setForm();
    this.findCategories();
  }

  private setForm() {
    const group = {
      name: [null, Validators.required],
      value: [null, Validators.required],
      category: [null, Validators.required],
      company: [null, Validators.required],
      type: [null, Validators.required],
      portion: [null, Validators.required],
      startDate: [null, Validators.required],
      dueDate: [null, Validators.required],
      registrationDate: [new Date],
      barCode: [null]
    };
    this.form = this.formBuilder.group(group);
  }

  saveBill() {
    console.log(this.form.getRawValue())
    this.billService.save(this.form.getRawValue()).subscribe(
      () => {
        toastr.success('Bill save successfully!')
        this.ngOnInit();
      }
    )
  }

  findCategories() {
    this.categoryService.findCategories().subscribe(
      res => {
        this.categories = res;
      }
    )
  }

}
