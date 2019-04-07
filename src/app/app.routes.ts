import { RouterModule, Routes } from '@angular/router';
import { PepeyaComponent } from './pepeya/pepeya/pepeya.component';
import { Loan1Component } from './pepeya/pasos/loan1/loan1.component';
import { Loan2Component } from './pepeya/pasos/loan2/loan2.component';
import { Loan3Component } from './pepeya/pasos/loan3/loan3.component';

const APP_ROUTES: Routes = [
    { path: 'loan1', component: Loan1Component },
    { path: 'loan2', component: Loan2Component },
    { path: 'loan3', component: Loan3Component },
    { path: '**',    component: PepeyaComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
