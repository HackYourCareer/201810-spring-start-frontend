import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "../app-routing.module";
import { AlertComponent } from './alert/alert.component';
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule,
    AppRoutingModule
  ],
  exports: [HeaderComponent, AlertComponent],
  declarations: [HeaderComponent, AlertComponent]
})
export class UiModule { }
