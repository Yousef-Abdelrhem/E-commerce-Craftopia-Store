import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { TrendingComponent } from './Pages/trending/trending.component';
import { ProductsComponent } from './Pages/products/products.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: "trending" , component: TrendingComponent},
    { path: "products" , component: ProductsComponent}
];
