import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'createcustomer',
  templateUrl: `./app/components/customer/createcustomer.component.html`
})

export class CreateCustomerComponent {
  model: any = {};
  info = '';

  constructor(private customerservice: CustomerService,
    private router: Router) {
    this.model.ethnicGroup = "African";
    this.model.gender = "Male";
    this.model.weightUOM = "kgs";
    this.model.heightUOM = "cm";
  }

  getLongDate(date) {
    return new Date(date).getTime();
  }

  SaveCustomerDetails() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.model.updatedBy = currentUser.email;
    this.model.updateDate = this.getLongDate(new Date());
    this.model.dateOfBirth = this.getLongDate(this.model.dateOfBirth);
    this.customerservice.createCustomer(this.model).subscribe((result) => {
      if (result) {
        this.info = "Customer created successfully";
        this.router.navigate(['/Customer']);
      }
      else {
        this.info = "Failed to create customer..!!";
      }
    });
  }

  ClearCustomerDetails() {
    this.router.navigate(['/Customer']);
  }
}

