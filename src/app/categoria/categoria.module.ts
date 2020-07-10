import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './categoria.routing';
import {CategoriaFormComponent} from './form/categoria-form.component';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice, CategoriaService} from "./service/categoria.services";
import { CategoriaListComponent } from './list/categoria-list.component';
import { CategoriaReportesComponent } from './reportes/categoria-reportes.component';
import { ExcelService } from 'app/core/service/excel.service';
@NgModule(
    {
        declarations:[
            CategoriaFormComponent,
            CategoriaListComponent,
            CategoriaReportesComponent

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule 

        ],
        providers:[
            restservice,
            CategoriaService,
            ExcelService,
            AlertasService

        ]
    }
)
export class CategoriaModule{

}