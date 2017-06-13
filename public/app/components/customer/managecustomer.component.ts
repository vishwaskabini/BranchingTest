import { Component, ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'managecustomer',
  templateUrl: `./app/components/customer/managecustomer.component.html`
})

export class ManageCustomerComponent {
  customerList: any = [];
  info = '';
  selectedCustomer: any = "";
  public rowsOnPage = 5;
  public filterQuery = "";
  public sortBy = "email";
  public sortOrder = "asc";

  constructor(private customerservice: CustomerService) {
    this.getCustomersList();
  }

  @ViewChild('modal') public modal: any;

  public showModal(customerID): void {
    this.selectedCustomer = customerID;
    this.modal.show();
  }

  public hideModal(): void {
    this.modal.hide();
  }

  getCustomersList() {
    this.customerservice.getcustomers().subscribe((result) => {
      if (result) {
        this.customerList = result;
        this.customerList.forEach(element => {
          element.dateOfBirth = this.getDate(element.dateOfBirth);
        });
      }
    });
  }

  getFullName(customer) {
    return customer.firstName + " " + customer.lastName;
  }

  getDate(time) {
    return new Date(time).toLocaleDateString();
  }
}

