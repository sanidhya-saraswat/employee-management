
import { Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

export const appRoutes: Routes = [
    { path: '', redirectTo:'/employees',pathMatch:'full' },
    { path: 'employees', component: ViewComponent },
    {path:'employees/add',component:AddComponent},
    {path:'employees/:id/edit',component:EditComponent}
  ];