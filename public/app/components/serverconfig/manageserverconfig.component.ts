import { Component, ViewChild } from '@angular/core';
import { ServerConfigService } from '../../services/serverconfig.service';

@Component({
  selector: 'manageserverconfig',
  templateUrl: `./app/components/serverconfig/manageserverconfig.component.html`
})

export class ManageServerConfigComponent {
  serverConfigList: any = [];
  info = '';
  selectedServerConfig: any = "";
  public rowsOnPage = 5;
  public sortBy = "releaseName";
  public sortOrder = "asc";

  constructor(private serverConfigservice: ServerConfigService) {
    this.getServerConfigsList();
  }

  @ViewChild('modal') public modal: any;

  public showModal(serverConfigID): void {
    this.selectedServerConfig = serverConfigID;
    this.modal.show();
  }

  public hideModal(): void {
    this.modal.hide();
  }

  getServerConfigsList() {
    this.serverConfigservice.getserverConfigs().subscribe((result) => {
      if (result) {
        this.serverConfigList = result;
      }
    });
  }

  getDate(time) {
    return new Date(time).toLocaleDateString();
  }
}

