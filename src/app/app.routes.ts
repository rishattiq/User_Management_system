import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component"
import { LayoutComponent } from './components/layout/layout.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [

    {
        path: "",
        redirectTo: "login",
        pathMatch : "full"

    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        component : LayoutComponent,
        children:[
            {
                path: "Userlist",
                component : UserListComponent
            },
            {
                path: "createUser",
                component : CreateUserComponent
            }
        ]
    }
];
