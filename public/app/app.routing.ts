import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './common/auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManageCustomerComponent } from './components/customer/managecustomer.component';
import { CreateCustomerComponent } from './components/customer/createcustomer.component';
import { EditCustomerComponent } from './components/customer/editcustomer.component';
import { ManageHealthInfoComponent } from './components/healthinfo/managehealthinfo.component';
import { CreateHealthInfoComponent } from './components/healthinfo/createhealthinfo.component';
import { EditHealthInfoComponent } from './components/healthinfo/edithealthinfo.component';
import { ManageUserComponent } from './components/user/manageuser.component';
import { ManageApplicationConfigComponent } from './components/applicationconfig/manageapplicationconfig.component';
import { ManageServerConfigComponent } from './components/serverconfig/manageserverconfig.component';

const RoutePaths: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Customer',
    component: ManageCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Customer/Create',
    component: CreateCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Customer/Edit/:id',
    component: EditCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'HealthInfo',
    component: ManageHealthInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'HealthInfo/Create',
    component: CreateHealthInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'HealthInfo/Edit/:id',
    component: EditHealthInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'User',
    component: ManageUserComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'User/Create',
  //   component: CreateUserComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'User/Edit/:id',
  //   component: EditUserComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'ApplicationConfig',
    component: ManageApplicationConfigComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ServerConfig',
    component: ManageServerConfigComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Login',
    component: LoginComponent
  }
];

export const appRoutes = RouterModule.forRoot(RoutePaths, { useHash: true });

export const appComponents = [
  HomeComponent,
  LoginComponent,
  ManageCustomerComponent,
  CreateCustomerComponent,
  EditCustomerComponent,
  ManageHealthInfoComponent,
  CreateHealthInfoComponent,
  EditHealthInfoComponent,
  ManageUserComponent,
  ManageApplicationConfigComponent,
  ManageServerConfigComponent
];
