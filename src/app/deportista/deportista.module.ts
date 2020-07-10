import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './deportista.routing';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice} from "./service/deportista.services";
import { DeportistaListComponent } from './list/deportista-list.component';
import { DeportistaService } from './service/deportista.services';
import { DeportistaFormComponent } from './form/deportista-form.component';
import { CategoriaDisciplinaService } from 'app/categoriadisciplina/service/categoriadisciplina.service';
import { PersonaService } from 'app/persona/service/persona.service';
import { DeportistaFormeditaComponent } from './formedita/deportista-formedita.component';
import { DeportistaFormeditfnfComponent } from './formeditfnf/deportista-formeditfnf.component';
import { DeportistaFormfnfComponent } from './formfnf/deportista-formfnf.component';
import { DeportistaListfnfComponent } from './listfnf/deportista-listfnf.component';

@NgModule(
    {
        declarations:[
            DeportistaFormComponent,
            DeportistaListComponent,
            DeportistaFormeditaComponent
            

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
            CategoriaDisciplinaService,
            PersonaService,
            AlertasService

        ]
    }
)
export class DeportistaModule{

}