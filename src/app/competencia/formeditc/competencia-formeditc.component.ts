import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { LoginComponent } from "../../+auth/+login/login.component";
import { config } from "./../../config";
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { id } from '@swimlane/ngx-datatable/release/utils';
import { AlertasService, CompetenciaService } from '../service/competencia.services';

@Component({
    selector: 'competencia-formeditc',
    templateUrl: './competencia-formeditc.component.html',
    styleUrls: [
        './competencia-formeditc.component.css'
    ]
})

export class CompetenciaFormeditcComponent {
    public competencia: any = {};
    public competencias: any;

    constructor(
        private competenciaService: CompetenciaService,
        private activatedRoute: ActivatedRoute,
        private alertasService: AlertasService

    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        this.getCompetencias();
        console.log(config);
        this.activatedRoute.params.subscribe(params => {
            if (params['idCompetencia']) {
                console.log(params);
                this.getCompetencia(params['idCompetencia']);
            }
        })
    }

    private getCompetencia(idCompetencia: number) {
        this.competenciaService.getCompetencia(idCompetencia).subscribe(competencia => {
            this.competencia = competencia;
        });

    }
    guardar() {

        //console.log(this.nombre);
        this.competenciaService.saveCompetencia(this.competencia).subscribe(competencia => {
            //console.log(autor);
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se guardo la Competencia Correctamente!!")
            window.history.back();
            this.getCompetencias();
        });
    }

    editar(competencia: any) {

        //console.log(this.nombre);
        this.alertasService.mostrarAlertaInfo("Actualizando", "Se actualizó la Competencia Correctamente!!")
        this.competencia = Object.assign({}, this.competencia);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        //console.log(this.nombre);
        this.competencia = {};
    }


    private getCompetencias() {

        //console.log(this.nombre);
        this.competenciaService.getCompetencias().subscribe(competencias => {
            this.competencias = competencias;
        });
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }


}