import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { CentrenamientoService } from './../service/centrenamiento.service';
import { LoginComponent } from "../../+auth/+login/login.component";
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { config } from "./../../config";
import { id } from '@swimlane/ngx-datatable/release/utils';
import { AlertasService } from '../service/centrenamiento.services';
import { aggregateBy, process } from '@progress/kendo-data-query';
@Component({
    selector: 'centrenamiento-form',
    templateUrl: './centrenamiento-form.component.html',
    styleUrls: [
        './centrenamiento-form.component.css'
    ]
})

export class CentrenamientoFormComponent {
    public centrenamiento: any = {};
    public centrenamientos: any;
    public data: any[] = this.centrenamientos;

    constructor(
        private centrenamientoService: CentrenamientoService,
        private activatedRoute: ActivatedRoute,
        private alertasService: AlertasService

    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        this.getEdCamposEntrenamientos();
        console.log(config);
        this.activatedRoute.params.subscribe(params => {
            if (params['campentreId']) {
                console.log(params);
                this.getEdCamposEntrenamiento(params['campentreId']);
            }
        })
    }

    private getEdCamposEntrenamiento(campentreId: number) {
        this.centrenamientoService.getEdCamposEntrenamiento(campentreId).subscribe(centrenamiento => {
            this.centrenamiento = centrenamiento;
        });

    }
    guardar() {

        //console.log(this.nombre);
        this.centrenamientoService.saveEdCamposEntrenamiento(this.centrenamiento).subscribe(centrenamiento => {
            //console.log(autor);
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se guardo el Campo de Entrenamiento Correctamente!!")
            window.history.back();
            this.getEdCamposEntrenamientos();
        });
    }

    editar(centrenamiento: any) {

        //console.log(this.nombre);
        this.alertasService.mostrarAlertaInfo("Actualizando", "Se actualizó el Campo de Entrenamiento Correctamente!!")
        this.centrenamiento = Object.assign({}, this.centrenamiento);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        //console.log(this.nombre);
        this.centrenamiento = {};
    }

    private getEdCamposEntrenamientos() {

        //console.log(this.nombre);
        this.centrenamientoService.getEdCamposEntrenamientos().subscribe(centrenamientos => {
            this.centrenamientos = centrenamientos;
        });
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }


}