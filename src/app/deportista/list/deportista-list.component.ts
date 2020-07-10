import { Component, OnInit } from '@angular/core';
import { ReplayComponent } from './../../+outlook/replay/replay.component';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component';
import { AlertasService, DeportistaService } from '../service/deportista.services';
//import { FdiPersona } from '../form/Models/person.model';
@Component({
    selector: 'deportista-form',
    templateUrl: './deportista-list.component.html',
    styleUrls: [
        './deportista-list.component.css'
    ]
})

export class DeportistaListComponent {
    public edDeportista: any = {};
    public edDeportistas: any;
    public age: number;
    public temp_var: Object = false;
    today: number = Date.now();

    constructor(
        private deportistaService: DeportistaService,
        private alertasService: AlertasService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        //this.persona=new FdiPersona();
        this.getA();
    }
    guardar() {

        //console.log(this.nombre);
        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe(edDeportista => {
            //console.log(autor);
            this.getA();
        });
    }

    editar(edDeportista: any) {

        //console.log(this.nombre);
        this.edDeportista = Object.assign({}, edDeportista);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var = true;

    }

    eliminar(edDeportista: any) {
        this.deportistaService.delete(edDeportista.deporId).subscribe(edDeportista=> {
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminó el Aspirante Correctamente!!")
            console.log(this.edDeportista);
            this.getA();
        })
    }

    private getA() {

        //console.log(this.nombre);
        this.deportistaService.getA().subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;
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