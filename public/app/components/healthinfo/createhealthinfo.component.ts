import { Component } from '@angular/core';
import { HealthInfoService } from '../../services/healthInfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'createhealthInfo',
  templateUrl: `./app/components/healthinfo/createhealthinfo.component.html`
})

export class CreateHealthInfoComponent {
  model: any = {};
  info = '';

  constructor(private healthInfoservice: HealthInfoService,
              private router: Router) {
  }

  getLongDate(date) {
    return new Date(date).getTime();
  }

  SaveHealthInfoDetails() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.model.updatedBy = currentUser.email;
    this.model.updateDate = this.getLongDate(new Date());
    this.model.dateOfBirth = this.getLongDate(this.model.dateOfBirth);
    this.healthInfoservice.createHealthInfo(this.model).subscribe((result) => {
      if (result) {
        this.info = "HealthInfo created successfully";
        this.router.navigate(['/HealthInfo']);
      }
      else {
        this.info = "Failed to create healthInfo..!!";
      }
    });
  }

  ClearHealthInfoDetails() {
    this.router.navigate(['/HealthInfo']);
  }
}

