import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PasswordComponent } from "./password/password.component";
import { NgModule } from "@angular/core";
import { UserDataComponent } from "./user-data/user-data.component";

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'password', component: PasswordComponent},    
    {path: 'user-data', component: UserDataComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}