import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SmartadminModule} from '../shared/smartadmin.module';
import {routing} from './persona.routing';
import {PersonaFormComponent} from './form/persona-form.component';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
//import { restservice } from './../core/service/rest.service';
import {AlertasService, restservice, PersonaService} from "./service/persona.services";
import { PersonaListComponent } from './list/persona-list.component';
import { PersonaFormeditComponent } from './formedit/persona-formedit.component';
@NgModule(
    {
        declarations:[
            PersonaFormComponent,
            PersonaListComponent,
            PersonaFormeditComponent

        ],
        imports:[
            SmartadminModule,
            routing,
            FormsModule,
            SmartadminDatatableModule 

        ],
        providers:[
            restservice,
            PersonaService,
            AlertasService

        ]
    }
)
export class PersonaModule{

}