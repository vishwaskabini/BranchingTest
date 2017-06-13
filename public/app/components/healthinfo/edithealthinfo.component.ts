import { Component } from '@angular/core';
import { HealthInfoService } from '../../services/healthInfo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'managehealthInfo',
  templateUrl: `./app/components/healthinfo/edithealthinfo.component.html`
})

export class EditHealthInfoComponent {
  model: any = {};
  info = '';
  healthInfoID: any = '';

  constructor(private healthInfoservice: HealthInfoService,            
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.healthInfoID = params['id'];
      this.getHealthInfoDetails();
    });
  }

  getHealthInfoDetails() {
    this.healthInfoservice.getHealthInfoById(this.healthInfoID).subscribe((result) => {
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

  UpdateHealthInfoDetails() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.model.updatedBy = currentUser.email;
    this.model.updateDate = this.getLongDate(new Date());
    this.model.dateOfBirth = this.getLongDate(this.model.dateOfBirth);
    this.healthInfoservice.updateHealthInfo(this.model).subscribe((result) => {
      if (result) {
        this.info = "HealthInfo updated successfully";
        this.router.navigate(['/HealthInfo']);
      }
      else {
        this.info = "Failed to update healthInfo..!!";
      }
    });
  }

  ClearHealthInfoDetails() {
    this.router.navigate(['/HealthInfo']);
  }
}