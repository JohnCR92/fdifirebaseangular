
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {BootstrapElementComponent} from "./bootstrap-element.component";

export const bootstrapElementRoutes: Routes = [{
  path: '',
  component: BootstrapElementComponent
}];

export const bootstrapElementRouting = RouterModule.forChild(bootstrapElementRoutes);

