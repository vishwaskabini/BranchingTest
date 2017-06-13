import { Component, ViewChild } from '@angular/core';
import { HealthInfoService } from '../../services/healthInfo.service';

@Component({
  selector: 'managehealthInfo',
  templateUrl: `./app/components/healthinfo/managehealthinfo.component.html`
})

export class ManageHealthInfoComponent {
  healthInfoList: any = [];
  info = '';
  selectedHealthInfo: any = "";
  public rowsOnPage = 5;
  public sortBy = "customerId";
  public sortOrder = "asc";

  constructor(private healthInfoservice: HealthInfoService) {
    this.getHealthInfosList();  
  }

  @ViewChild('modal') public modal: any;

  public showModal(healthInfoID): void {
    this.selectedHealthInfo = healthInfoID;
    this.modal.show();
  }

  public hideModal(): void {
    this.modal.hide();
  }

  getHealthInfosList() {
    this.healthInfoservice.gethealthInfos().subscribe((result) => {
      if (result) {
        this.healthInfoList = result;
      }
    });
  }
}

