import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AssetsComponent } from './assets/assets.component';
import { AddAssetsComponent } from './add-assets/add-assets.component';
import { EditComponent } from './edit/edit.component';
import { DeleteAssetsComponent } from './delete-assets/delete-assets.component';
import { RequestsComponent } from './requests/requests.component';
import { AllocatedAssetsComponent } from './allocated-assets/allocated-assets.component';
import { UnallocatedAssetsComponent } from './unallocated-assets/unallocated-assets.component';
import { RaiseRequestComponent } from './raise-request/raise-request.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterAssetsPipe } from './filter-assets.pipe';
import { TrimPipe } from './trim.pipe';
import { UsersComponent } from './users/users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AddManagersComponent } from './add-managers/add-managers.component';
import { ValidateRequestsComponent } from './validate-requests/validate-requests.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { MyAssetsComponent } from './my-assets/my-assets.component';
import { UsersService } from './user.service';
import { RequestInterceptor } from './request.interceptor';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AssetsComponent,
    AddAssetsComponent,
    EditComponent,
    DeleteAssetsComponent,
    RequestsComponent,
    AllocatedAssetsComponent,
    UnallocatedAssetsComponent,
    RaiseRequestComponent,
    RequestStatusComponent,
    GenerateReportComponent,
    HeaderComponent,
    AllRequestsComponent,
    ProfileComponent,
    AddUsersComponent,
    FilterAssetsPipe,
    TrimPipe,
    UsersComponent,
    EditUsersComponent,
    AddManagersComponent,
    ValidateRequestsComponent,
    MyRequestsComponent,
    MyAssetsComponent,
    CustomersComponent,
    AddCustomersComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    UsersService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
       multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
