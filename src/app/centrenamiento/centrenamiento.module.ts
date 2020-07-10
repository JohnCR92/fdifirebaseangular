import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
import {routing} from './centrenamiento.routing';
import {CentrenamientoFormComponent} from './form/centrenamiento-form.component';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice, CentrenamientoService} from "./service/centrenamiento.services";
import { CentrenamientoListComponent } from './list/centrenamiento-list.component';
import { ExcelService } from 'app/core/service/excel.service';
import { CentrenamientoReporteComponent } from './reportes/centrenamiento-reportes.component';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
@NgModule(
    {
        declarations:[
            CentrenamientoFormComponent,
            CentrenamientoListComponent,
            CentrenamientoReporteComponent

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule,

        ],
        providers:[
            restservice,
            CentrenamientoService,
            AlertasService,
            ExcelService,
            ExcelExportModule

        ]
    }
)
export class CentrenamientoModule{

}