import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './entrenador.routing';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice} from "./service/entrenador.services";
import { DeportistaListComponent } from './list/deportista-list.component';
import { EntrenadorService } from './service/entrenador.services';
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
import { EntrenadorFormComponent } from './form/entrenador-form.component';
import { EntrenadorListComponent } from './list/entrenador-list.component';
import { EntrenadorFormeditComponent } from './formedite/entrenador-formedite.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { DeportEntreService } from 'app/deportentre/service/deportentre.service';
import { EntrenadorFormvereComponent } from './formvere/entrenador-formvere.component';
import { EntrenadorReportesComponent } from './reportes/entrenador-reportes.component';

@NgModule(
    {
        declarations:[
            EntrenadorFormComponent,
            EntrenadorListComponent,
            EntrenadorFormvereComponent,
            EntrenadorReportesComponent,
            EntrenadorFormeditComponent,
            AsistenciaComponent

            

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule 
        ],
        providers:[
            restservice,
            EntrenadorService,
            CategoriaService,
            DisciplinaService,
            DeportEntreService,
            CategoriaDisciplinaService,
            PersonaService,
            AlertasService,
            FileUploadService

        ]
    }
)
export class EntrenadorModule{

}