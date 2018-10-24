import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeerEditComponent} from "./beer/beer-edit/beer-edit.component";
import {BeerListComponent} from "./beer/beer-list/beer-list.component";
import {BeerAddComponent} from "./beer/beer-add/beer-add.component";

const routes: Routes = [
  {
    path: '', component: BeerListComponent
  },
  {
    path: 'add', component: BeerAddComponent
  },
  {
    path: 'edit/:id', component: BeerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
