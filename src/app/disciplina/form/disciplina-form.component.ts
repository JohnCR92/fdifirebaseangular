import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { DisciplinaService } from './../service/disciplina.service';
import { LoginComponent } from "../../+auth/+login/login.component";
import { config } from '../../shared/smartadmin.config';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { AlertasService } from '../service/disciplina.services';
import { CentrenamientoService } from '../../centrenamiento/service/centrenamiento.service';


@Component({
    selector: 'disciplina-form',
    templateUrl: './disciplina-form.component.html',
    styleUrls: ['./disciplina-form.component.css']
})

export class DisciplinaFormComponent {
    public fdiDisciplina: any = {
        "edCamposEntrenamiento": {}
    };
    public fdiDisciplinas: any;
    edCamposEntrenamientos: any;
    public entorno: string = config.environment;
    constructor(private disciplinaService: DisciplinaService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertasService,
        private centrenamientoService: CentrenamientoService
    ) {

    }
    ngOnInit() {
        this.getFdiDisciplinas();
        this.getEdCamposEntrenamientos();
        console.log(config);

        this.entorno = config.environment;

        this.activatedRoute.params.subscribe(params => {
            if (params['disciplinaId']) {
                this.getFdiDisciplina(params['disciplinaId']);
            }
        });
        //this.restService.get("http://localhost:8090/autor").subscribe(autores =>{
        //  this.autores=autores;
        //console.log(this.autores, "in");
        //});

        //console.log(this.autores, "out");
    }

    private getFdiDisciplina(disciplinaId: number) {
        this.disciplinaService.getFdiDisciplina(disciplinaId).subscribe(fdiDisciplina => {
            this.fdiDisciplina = fdiDisciplina;
        });

    }


    guardar() {
        //console.log(this.nombre);

        this.disciplinaService.saveFdiDisciplina(this.fdiDisciplina).subscribe(fdiDisciplina => {
            //console.log(autor);
            this.alertaService.mostrarAlertaInfo("Actualizando", "Se a guardado la Disciplina Deportiva Correctamente!!")
            window.history.back();
            this.getFdiDisciplinas();
        });

    }
    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.disciplinaId === fromSaveValue.disciplinaId : null;
    }
    editar(fdiDisciplina: any) {
        //console.log(this.nombre);
        this.fdiDisciplina = Object.assign({}, fdiDisciplina);
    }
    cancelar() {
        //console.log(this.nombre);
        this.fdiDisciplina = {
            "edCamposEntrenamiento": {}
        };
    }

    atras() {
        //console.log(this.nombre);
        window.history.back();
    }

    private getFdiDisciplinas() {
        //console.log(this.nombre);


        this.disciplinaService.getFdiDisciplinas().subscribe(fdiDisciplinas => {
            this.fdiDisciplinas = fdiDisciplinas;
        });

    }

    private getEdCamposEntrenamientos() {
        //console.log(this.nombre);
        this.centrenamientoService.getEdCamposEntrenamientos().subscribe(edCamposEntrenamientos => {
            this.edCamposEntrenamientos = edCamposEntrenamientos;
        });

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }




}