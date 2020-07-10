import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './deportistabaja.routing';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice} from "./service/deportistabaja.services";
import { DeportistaListComponent } from './list/deportista-list.component';
import { DeportistaService } from './service/deportistabaja.services';
import { DeportistaFormComponent } from './form/deportista-form.component';
import { CategoriaDisciplinaService } from 'app/categoriadisciplina/service/categoriadisciplina.service';
import { PersonaService } from 'app/persona/service/persona.service';
import { DeportistaFormeditaComponent } from './formedita/deportista-formedita.component';
import { DeportistaFormeditfnfComponent } from './formeditfnf/deportistafnf-formeditfnf.component';
import { DeportistafnfFormComponent } from './form/deportistafnf-form.component';
import { DeportistafnfListComponent } from './list/deportistafnf-list.component';
import { FileUploadService } from 'app/core/service/fileupload.service';
import { DeportistaFormfotoComponent } from './formfoto/deportistafnf-formfoto.component';
import { DeportistaFormverfnfComponent } from './formverfnf/deportistafnf-formverfnf.component';
import { CategoriaService } from 'app/categoria/service/categoria.service';
import { DisciplinaService } from 'app/disciplina/service/disciplina.service';
import { DeportistabajaFormComponent } from './form/deportistabaja-form.component';
import { DeportistabajaListComponent } from './list/deportistabaja-list.component';
import { DeportistaFormeditbajaComponent } from './formeditbaja/deportistabaja-formeditbaja.component';
import { DeportistaFormverbajaComponent } from './formverbaja/deportistabaja-formverbaja.component';
import { DeportistabajaReportesComponent } from './reportes/deportistabaja-reportes.component';

@NgModule(
    {
        declarations:[
            DeportistabajaFormComponent,
            DeportistabajaListComponent,
            DeportistaFormeditbajaComponent,
            DeportistaFormverbajaComponent,
            DeportistabajaReportesComponent

            

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule 
        ],
        providers:[
            restservice,
            DeportistaService,
            CategoriaService,
            DisciplinaService,
            CategoriaDisciplinaService,
            PersonaService,
            AlertasService,
            FileUploadService

        ]
    }
)
export class BajaDeportistaModule{

}