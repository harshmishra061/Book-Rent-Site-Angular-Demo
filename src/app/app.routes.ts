import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentedComponent } from './rented/rented.component';
import { WishlistedComponent } from './wishlisted/wishlisted.component';
import { SigninComponent } from './signin/signin.component';
import { AdminwishlistComponent } from './adminwishlist/adminwishlist.component';
import { AdminrentlistComponent } from './adminrentlist/adminrentlist.component';
import { NewbookComponent } from './newbook/newbook.component';

export const routes: Routes = [
    {
        path : '',
        component : SigninComponent
    },
    {
        path : 'home',
        component : HomeComponent
    }, 
    {
        path : 'rented', 
        component : RentedComponent
    },
    {
        path : 'wishlisted',
        component : WishlistedComponent
    },
    {
        path : 'adminwishlist',
        component : AdminwishlistComponent
    },
    {
        path : 'adminrentlist',
        component : AdminrentlistComponent
    },
    {
        path : 'newbook',
        component : NewbookComponent
    }
];
