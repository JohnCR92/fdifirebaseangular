import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './competencia.routing';
import {CategoriaFormComponent} from './form/categoria-form.component';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice} from "./service/competencia.services";
import { CompetenciaFormComponent } from './form/competencia-form.component';
import { CompetenciaListComponent } from './list/competencia-list.component';
import { CompetenciaService } from './service/competencia.service';
import { CompetenciaFormeditcComponent } from './formeditc/competencia-formeditc.component';
import { CompetenciaReportesComponent } from './reportes/competencia-reportes.component';
@NgModule(
    {
        declarations:[
            CompetenciaFormComponent,
            CompetenciaFormeditcComponent,
            CompetenciaReportesComponent,
            CompetenciaListComponent

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule 

        ],
        providers:[
            restservice,
            CompetenciaService,
            AlertasService

        ]
    }
)
export class CompetenciaModule{

}