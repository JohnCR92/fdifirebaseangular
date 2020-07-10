import { DISABLED } from '@angular/forms/src/model';
import { AlertasService, DeportistaService } from '../service/deportista.services';
import { Component, OnInit, ChangeDetectorRef, ViewChild, Renderer2, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
//import { id } from '@swimlane/ngx-datatable/release/utils';
import { restservice } from '../../core/service/rest.service';
import { config } from '../../shared/smartadmin.config';
import { style } from '@angular/animations';
import { PersonaService } from 'app/persona/service/persona.service';
import { CategoriaDisciplinaService } from 'app/categoriadisciplina/service/categoriadisciplina.service';


@FadeInTop()

@Component({
    selector: 'deportista-formedita',
    templateUrl: './deportista-formedita.component.html',
    styleUrls: ['./deportista-formedita.component.css']
}

)


export class DeportistaFormeditaComponent {

    public edDeportista: any = {
        "fdiPersona": {},
        "fdiCategoriaDisciplina": {}
    };

    public edDeportistas: any;
    fdiPersonas: any;
    fdiCategoriaDisciplinas: any;
    public entorno: string = config.environment;
    constructor(private deportistaService: DeportistaService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertasService,
        private personaService: PersonaService,
        private categoriadisciplinaService: CategoriaDisciplinaService
    ) {

    }
    ngOnInit() {
        this.getFdiCategoriaDisciplinas();
        this.getA();
        this.getFdiPersonas();
        console.log(config);

        this.entorno = config.environment;

        this.activatedRoute.params.subscribe(params => {
            if (params['deporId']) {
                this.getEdDeportista(params['deporId']);
            }
        });
        //this.restService.get("http://localhost:8090/autor").subscribe(autores =>{
        //  this.autores=autores;
        //console.log(this.autores, "in");
        //});

        //console.log(this.autores, "out");
    }

    private getEdDeportista(deporId: number) {
        this.deportistaService.getEdDeportista(deporId).subscribe(edDeportista => {
            this.edDeportista = edDeportista;
        });

    }


    guardar() {
        //console.log(this.nombre);

        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe(deportista => {
            //console.log(autor);
            this.alertaService.mostrarAlertaInfo("Actualizando", "Se a guardado el Aspirante Correctamente!!")
            window.history.back();
            this.getA();
        });

    }
    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.deporId === fromSaveValue.deporId : null;
    }
    editar(edDeportista: any) {
        //console.log(this.nombre);
        this.edDeportista = Object.assign({}, edDeportista);
    }
    cancelar() {
        //console.log(this.nombre);
        this.edDeportista = {
            "fdiPersona": {},
        "fdiCategoriaDisciplina": {}
        };
    }

    atras() {
        //console.log(this.nombre);
        window.history.back();
    }

    private getFdiCategoriaDisciplinas() {
        //console.log(this.nombre);
        this.categoriadisciplinaService.getFdiCategoriaDisciplinas().subscribe(fdiCategoriaDisciplinas => {
            this.fdiCategoriaDisciplinas = fdiCategoriaDisciplinas;
        });

    }

    private getFdiPersonas() {
        //console.log(this.nombre);
        this.personaService.getFdiPersonas().subscribe(fdiPersonas => {
            this.fdiPersonas = fdiPersonas;
        });

    }

    private getA() {
        //console.log(this.nombre);
        this.deportistaService.getA().subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;
        });

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }
}