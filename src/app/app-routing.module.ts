import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Components/create/create.component';
import { DetailsComponent } from './Components/details/details.component';
import { UpdateComponent } from './Components/update/update.component';
import { ViewComponent } from './Components/view/view.component';

const routes: Routes = [
  {path:'',component:ViewComponent},
  {path:'create',component:CreateComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
