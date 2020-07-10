import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formElementRouting } from './form-element.routing';
import {SmartadminModule} from "../../shared/smartadmin.module";
import {FormElementComponent} from "./form-element.component";

@NgModule({
  imports: [
    CommonModule,
    formElementRouting,
    SmartadminModule
  ],
  declarations: [FormElementComponent]
})
export class FormElementModule { }
