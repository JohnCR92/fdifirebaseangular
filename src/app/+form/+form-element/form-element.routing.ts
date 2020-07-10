
import {ModuleWithProviders} from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import {FormElementComponent} from "./form-element.component";

export const formElementRoutes: Routes = [{
  path: '',
  component: FormElementComponent
}];

export const formElementRouting = RouterModule.forChild(formElementRoutes);

