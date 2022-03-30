import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoryService } from 'src/app/services/category.service';
import toastr from 'toastr';
import { BillService } from '../../../services/bill.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  categories: any[] = []
  times: any[] = []
  billTypes: any[] = [];
  submittingForm: Boolean = false;
  currentAction: string;
  pageTitle: string;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private billService: BillService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthenticationService
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
    this.setCurrentAction();
    this.loadBill();
  }

  submitForm() {
    this.submittingForm = true;
    if (this.currentAction == 'new') {
      this.saveBill();
    } else {
      this.updateBill();
    }
  }

  private saveBill() {
    this.billService.save(this.registerForm.getRawValue()).subscribe(
      () => {
        toastr.success('Bill save successfully.')
        this.router.navigateByUrl('registers');
        this.findCategories();
        this.submittingForm = false;
      }
    )
  }

  private updateBill() {
    this.billService.update(this.registerForm.getRawValue()).subscribe(
      () => {
        toastr.success('Bill updated successfully.')
        this.router.navigateByUrl('registers');
        this.findCategories();
        this.submittingForm = false;
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

  //PRIVATE METHODS
  private setForm() {
    const group = {
      id: [null],
      uuid: [this.auth.getIdUser()],
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
    this.registerForm = this.formBuilder.group(group);
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path == "new") {
      this.currentAction = "new"
      this.pageTitle = 'Register Bill'
    } else {
      this.currentAction = "edit"
      this.pageTitle = 'Editing Bill'

    }
  }

  private loadBill() {
    if (this.currentAction == "edit") {
      this.route.paramMap.pipe(
        switchMap(params => this.billService.findById(Number(params.get("id"))))
      ).subscribe(
        (bill) => {
          this.registerForm.patchValue(bill);
        }
      )
    }
  }
}
