import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component'; 
import { AlertasService, EntrenadorDisciService } from '../service/entrenadordisci.services';
@Component({
    selector: 'entrenadordisci-form',
    templateUrl: './entrenadordisci-list.component.html',
    styleUrls: [
        './entrenadordisci-list.component.css'
    ]
})

export class EntrenadorDisciListComponent {
    public fdiEntrenadorCatDisciplica: any = {};
    public fdiEntrenadorCatDisciplicas: any;
    public temp_var: Object=false;

    constructor(
        private entrenadorDisciService: EntrenadorDisciService,
        private alertasService: AlertasService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        this.getFdiEntrenadorCatDisciplicas();
    }
    guardar() {

        //console.log(this.nombre);
        this.entrenadorDisciService.saveFdiEntrenadorCatDisciplica(this.fdiEntrenadorCatDisciplica).subscribe(fdiEntrenadorCatDisciplica => {
            //console.log(autor);
            this.getFdiEntrenadorCatDisciplicas();
        });
    }

    public getUrlDoc1(codigo) {
        return "http://localhost:8080/entrenador/documento" + "/" + codigo;

    }

    editar(fdiEntrenadorCatDisciplica: any) {

        //console.log(this.nombre);
        this.fdiEntrenadorCatDisciplica = Object.assign({}, fdiEntrenadorCatDisciplica);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var=true;
     
    }

    eliminar(fdiEntrenadorCatDisciplica: any) {
        this.entrenadorDisciService.delete(fdiEntrenadorCatDisciplica.idEntCatdis).subscribe(fdiEntrenadorCatDisciplica => {
            this.alertasService.mostrarAlertaWarning("Actualizando", "Se eliminó el Entrenador con su Respectiva Disciplina Deportiva Correctamente!!")
            console.log(this.fdiEntrenadorCatDisciplica);

            this.getFdiEntrenadorCatDisciplicas();
        })
    }


    private getFdiEntrenadorCatDisciplicas() {

        //console.log(this.nombre);
        this.entrenadorDisciService.getFdiEntrenadorCatDisciplicas().subscribe(fdiEntrenadorCatDisciplicas => {
            this.fdiEntrenadorCatDisciplicas = fdiEntrenadorCatDisciplicas;
            this.temp_var=true;
        });
    }


}