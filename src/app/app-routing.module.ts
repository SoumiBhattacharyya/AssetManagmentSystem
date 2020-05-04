import { HomeComponent } from "./home/home.component";
import { AssetsComponent } from "./assets/assets.component";
import { RequestsComponent } from "./requests/requests.component";
import { RaiseRequestComponent } from "./raise-request/raise-request.component";
import { NgModule } from "@angular/core";
import { RequestStatusComponent } from "./request-status/request-status.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { AddAssetsComponent } from "./add-assets/add-assets.component";
import { GenerateReportComponent } from "./generate-report/generate-report.component";
import { AllRequestsComponent } from "./all-requests/all-requests.component";
import { AllocatedAssetsComponent } from "./allocated-assets/allocated-assets.component";
import { UnallocatedAssetsComponent } from "./unallocated-assets/unallocated-assets.component";
import { EditComponent } from "./edit/edit.component";
import { UsersComponent } from "./users/users.component";
import { EditUsersComponent } from "./edit-users/edit-users.component";
import { AddManagersComponent } from "./add-managers/add-managers.component";
import { ValidateRequestsComponent } from "./validate-requests/validate-requests.component";
import { MyRequestsComponent } from "./my-requests/my-requests.component";
import { AuthGuard } from "./login/auth.guard";
import { MyAssetsComponent } from "./my-assets/my-assets.component";
import { ProfileComponent } from "./profile/profile.component";
import { CustomersComponent } from "./customers/customers.component";
import { AddCustomersComponent } from "./add-customers/add-customers.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

@NgModule({
    imports:[
        RouterModule.forRoot([
            {path:'home',component:HomeComponent,canActivate : [AuthGuard],data:{roles:['ROLE_MANAGER','ROLE_ADMIN']}},
            {path:'assets',component:AssetsComponent,canActivate : [AuthGuard],data:{roles:['ROLE_MANAGER']}},
            {path:'add-managers',component:AddManagersComponent,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'add-customers',component:AddCustomersComponent,canActivate : [AuthGuard],data:{roles:['ROLE_MANAGER']}},
            {path:'profile-settings',component:ProfileSettingsComponent},
            {path:'change-password',component:ChangePasswordComponent},
            {path:'my-assets',component:MyAssetsComponent,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'users',component:UsersComponent,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'customers',component:CustomersComponent,canActivate : [AuthGuard],data:{roles:['ROLE_MANAGER']}},
            {path:'edit-assets',component:EditComponent,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'edit-users',component:EditUsersComponent,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'add-assets',component:AddAssetsComponent,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'allocated-assets',component:AllocatedAssetsComponent,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'unallocated-assets',component:UnallocatedAssetsComponent,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'generate-report',component:GenerateReportComponent,canActivate : [AuthGuard],data:{roles:['ROLE_MANAGER']}},
            {path:'my-requests',component: MyRequestsComponent,canActivate : [AuthGuard],data:{roles:['ROLE_MANAGER']} },
            {path:'validate-requests',component: ValidateRequestsComponent ,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'all-requests',component: AllRequestsComponent ,canActivate : [AuthGuard],data:{roles:['ROLE_ADMIN']}},
            {path:'raise-request',component:RaiseRequestComponent,canActivate : [AuthGuard],data:{roles:['ROLE_MANAGER']}},
            {path:'request-status',component:RequestStatusComponent},
            {path:'register',component:RegisterComponent},
            {path:'profile',component:ProfileComponent},
            {path:'login',component:LoginComponent},
            {path:'',component:LoginComponent}
            // {path:'**',component:PageNotFoundComponent}
            
             
      
          ])
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}