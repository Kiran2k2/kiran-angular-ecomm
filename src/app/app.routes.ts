import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './layouts/products/products.component';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [{
    path:'',
    redirectTo:"login",
    pathMatch:'full'
},
{
    path:'login',
    component:LoginComponent
},
 {
    path:'',
    component:ProductsComponent,
    children:[
        {
            path:'products',
            component:ProductsComponent
        }
    ]
 }



];
