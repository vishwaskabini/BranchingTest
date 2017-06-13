import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'managecustomer',
  templateUrl: `./app/components/customer/editcustomer.component.html`
})

export class EditCustomerComponent {
  model: any = {};
  info = '';
  customerID: any = '';

  constructor(private customerservice: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.model.ethnicGroup = "African";
    this.model.gender = "Male";
    this.model.weightUOM = "kgs";
    this.model.heightUOM = "cm";
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.customerID = params['id'];
      this.getCustomerDetails();
    });
  }

  getCustomerDetails() {
    this.customerservice.getCustomer(this.customerID).subscribe((result) => {
      if (result) {
        result[0].dateOfBirth = this.getDate(result[0].dateOfBirth);
        this.model = result[0];
      }
    });
  }

  getDate(time) {
    return new Date(time).toLocaleDateString();
  }

  getLongDate(date) {
    return new Date(date).getTime();
  }

  UpdateCustomerDetails() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.model.updatedBy = currentUser.email;
    this.model.updateDate = this.getLongDate(new Date());
    this.model.dateOfBirth = this.getLongDate(this.model.dateOfBirth);
    this.customerservice.updateCustomer(this.model).subscribe((result) => {
      if (result) {
        this.info = "Customer updated successfully";
        this.router.navigate(['/Customer']);
      }
      else {
        this.info = "Failed to update customer..!!";
      }
    });
  }

  ClearCustomerDetails() {
    this.router.navigate(['/Customer']);
  }
}