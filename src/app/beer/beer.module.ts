import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {BeerService} from "./service/beer.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {BeerFormComponent} from './beer-form/beer-form.component';
import {BeerAddComponent} from './beer-add/beer-add.component';
import {BeerListComponent} from './beer-list/beer-list.component';
import {BeerEditComponent} from './beer-edit/beer-edit.component';
import {UiModule} from "../ui/ui.module";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    NgbModalModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [BeerListComponent, BeerAddComponent, BeerEditComponent],
  declarations: [BeerFormComponent, BeerAddComponent, BeerListComponent, BeerEditComponent],
  providers: [BeerService]
})
export class BeerModule {
}
