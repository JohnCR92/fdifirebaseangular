import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './disciplina.routing';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
import {DisciplinaFormComponent} from './form/disciplina-form.component';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice, DisciplinaService} from "./service/disciplina.services";
import { DisciplinaListComponent } from './list/disciplina-list.component';
import { CentrenamientoService } from '../centrenamiento/service/centrenamiento.service';
import { DisciplinaFormeditdComponent } from './formeditd/disciplina-formeditd.component';
import { DisciplinaReportesComponent } from './reportes/disciplina-reportes.component';
import { ExcelService } from 'app/core/service/excel.service';
@NgModule(
    {
        declarations:[
            DisciplinaFormComponent,
            DisciplinaFormeditdComponent,
            DisciplinaListComponent,
            DisciplinaReportesComponent

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule

        ],
        providers:[
            restservice,
            DisciplinaService,
            CentrenamientoService,
            AlertasService,
            ExcelService

        ]
    }
)
export class DisciplinaModule{

}