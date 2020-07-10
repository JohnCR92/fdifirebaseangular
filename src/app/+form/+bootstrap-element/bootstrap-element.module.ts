import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapElementRouting } from './bootstrap-element.routing';
import {BootstrapElementComponent} from "./bootstrap-element.component";
import {SmartadminModule} from "../../shared/smartadmin.module";

@NgModule({
  imports: [
    CommonModule,
    bootstrapElementRouting,
    SmartadminModule
  ],
  declarations: [BootstrapElementComponent]
})
export class BootstrapElementModule { }
