import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { SidebarModule } from 'ng-sidebar';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { DataTableModule } from 'angular2-datatable';

import { HttpClient } from './common/routes/http.client';
import { AppComponent } from './app.component';
import { AuthGuard } from './common/auth/auth.guard';
import { appRoutes, appComponents } from './app.routing';
import { DataFilterPipe }   from './common/filters/data-filter.pipe';

import { AuthenticationService } from './services/authentication.service';
import { CustomerService } from './services/customer.service';
import { HealthInfoService } from './services/healthInfo.service';
import { ServerConfigService } from './services/serverconfig.service';
import { ApplicationConfigService } from './services/applicationconfig.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2BootstrapModule.forRoot(),
    SidebarModule.forRoot(),
    DataTableModule,
    appRoutes
  ],
  declarations: [
    AppComponent,
    DataFilterPipe,
    ...appComponents
  ],
  providers: [AuthenticationService, CustomerService, HealthInfoService, AuthGuard, HttpClient,
            ServerConfigService, ApplicationConfigService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
