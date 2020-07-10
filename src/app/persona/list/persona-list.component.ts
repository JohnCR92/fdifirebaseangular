import { Component, OnInit } from '@angular/core';
import { ReplayComponent } from './../../+outlook/replay/replay.component';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component';
import { AlertasService, PersonaService } from '../service/persona.services';
import { FdiPersona } from '../form/Models/person.model';
@Component({
    selector: 'persona-form',
    templateUrl: './persona-list.component.html',
    styleUrls: [
        './persona-list.component.css'
    ]
})

export class PersonaListComponent {
    public persona: any = {};
    public personas: any;
    public age: number;
    public temp_var: Object = false;
    today: number = Date.now();

    constructor(
        private personaService: PersonaService,
        private alertasService: AlertasService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        this.persona=new FdiPersona();
        this.getFdiPersonas();
    }
    guardar() {

        //console.log(this.nombre);
        this.personaService.saveFdiPersona(this.persona).subscribe(persona => {
            //console.log(autor);
            this.getFdiPersonas();
        });
    }

    editar(persona: any) {

        //console.log(this.nombre);
        this.persona = Object.assign({}, persona);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var = true;

    }

    eliminar(persona: any) {
        this.personaService.delete(persona.prsId).subscribe(persona => {
            this.alertasService.mostrarAlertaWarning("Actualizando", "Se eliminó la Persona Correctamente!!")
            console.log(this.persona);

            this.getFdiPersonas();
        })
    }

    private getFdiPersonas() {

        //console.log(this.nombre);
        this.personaService.getFdiPersonas().subscribe(personas => {
            this.personas = personas;
            this.temp_var = true;
        });
    }


    CalcularEdad(prsFechaNaciemineto: Date): number {

        const today: Date = new Date();
        const birthDate: Date = new Date(prsFechaNaciemineto);
        
        if (prsFechaNaciemineto != null) {
            let age: number = today.getFullYear() - birthDate.getFullYear();
            const month: number = today.getMonth() - birthDate.getMonth();
            if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
            age--;
            return age;
        } else 
        {
            return 0;
        }



    }




}