import { Component, ViewChild } from '@angular/core';
import { ApplicationConfigService } from '../../services/applicationconfig.service';

@Component({
  selector: 'manageapplicationconfig',
  templateUrl: `./app/components/applicationconfig/manageapplicationconfig.component.html`
})

export class ManageApplicationConfigComponent {
  applicationconfigList: any = [];
  info = '';
  selectedApplicationConfig: any = "";
  public rowsOnPage = 5;
  public sortBy = "applicationName";
  public sortOrder = "asc";

  constructor(private applicationconfigservice: ApplicationConfigService) {
    this.getApplicationConfigsList();
  }

  @ViewChild('modal') public modal: any;

  public showModal(applicationconfigID): void {
    this.selectedApplicationConfig = applicationconfigID;
    this.modal.show();
  }

  public hideModal(): void {
    this.modal.hide();
  }

  getApplicationConfigsList() {
    this.applicationconfigservice.getapplicationConfigs().subscribe((result) => {
      if (result) {
        this.applicationconfigList = result;
      }
    });
  }

  getDate(time) {
    return new Date(time).toLocaleDateString();
  }
}

