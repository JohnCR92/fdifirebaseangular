import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { CategoriaDisciplinaService } from './../service/categoriadisciplina.service';
import { LoginComponent } from "../../+auth/+login/login.component";
import { config } from '../../shared/smartadmin.config';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { AlertasService } from '../service/deportentre.services';
import { DisciplinaService } from '../../disciplina/service/disciplina.service';
import { CategoriaService } from '../../categoria/service/categoria.service';
import { DeportistaService } from 'app/deportistafnf/service/deportistafnf.service';
import { EntrenadorService } from 'app/entrenador/service/entrenador.service';
import { DeportEntreService } from '../service/deportentre.service';

@FadeInTop()
@Component({
    selector: 'deportentre-formeditde',
    templateUrl: './deportentre-formeditde.component.html',
    styleUrls: ['./deportentre-formeditde.component.css']
})

export class DeportEntreFormeditdeComponent {
    public edDeportistaEntrenador: any = {

        "edDeportista": {},
        "fdiPersona": {},
        "fdiEntrenador": {}

    };
    selected: string = "";
    public edDeportistaEntrenadors: any;
    edDeportistas: any;
    fdiEntrenadors: any;
    public entorno: string = config.environment;
    constructor(private deportentreService: DeportEntreService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertasService,
        private deportistaService: DeportistaService,
        private entrenadorService: EntrenadorService
    ) {

    }
    ngOnInit() {
        this.getEdDeportistaEntrenadors();
        this.getEdDeportistas();
        this.getFdiEntrenadors();
        console.log(config);

        this.entorno = config.environment;

        this.activatedRoute.params.subscribe(params => {
            if (params['idDepEntre']) {
                this.getEdDeportistaEntrenador(params['idDepEntre']);

            }
        });
        //this.restService.get("http://localhost:8090/autor").subscribe(autores =>{
        //  this.autores=autores;
        //console.log(this.autores, "in");
        //});

        //console.log(this.autores, "out");
    }

    test(value) {
        console.log(value)

    }

    private getEdDeportistaEntrenador(idDepEntre: number) {
        this.deportentreService.getEdDeportistaEntrenador(idDepEntre).subscribe(edDeportistaEntrenador => {
            this.edDeportistaEntrenador = edDeportistaEntrenador;

            console.log(this.edDeportistaEntrenador)
        });

    }


    guardar() {
        //console.log(this.nombre);
        console.log(this.edDeportistaEntrenador)
        delete this.edDeportistaEntrenador.fdiEntrenador.disciplicas
        console.log(this.edDeportistaEntrenador)
        this.deportentreService.saveEdDeportistaEntrenador(this.edDeportistaEntrenador).subscribe(edDeportistaEntrenador => {
            //console.log(autor);

            this.alertaService.mostrarAlertaInfo("Actualizando", "Se a guardado el Entrenador con su respectivo Deportista Correctamente!!")
            window.history.back();

            this.getEdDeportistaEntrenadors();
        });

    }
    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.idDepEntre === fromSaveValue.idDepEntre : null;
    }
    editar(edDeportistaEntrenador: any) {
        //console.log(this.nombre);
        this.edDeportistaEntrenador = Object.assign({}, edDeportistaEntrenador);
    }
    cancelar() {
        //console.log(this.nombre);
        this.edDeportistaEntrenador = {
            "edDeportista": {},
            "fdiPersona": {},
            "fdiEntrenador": {}
        };

    }

    atras() {
        //console.log(this.nombre);
        window.history.back();
    }

    private getEdDeportistas() {
        //console.log(this.nombre);
        this.deportistaService.getEdDeportistas().subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;
        });

    }


    private getFdiEntrenadors() {
        //console.log(this.nombre);
        this.entrenadorService.getFdiEntrenadors().subscribe(fdiEntrenadors => {
            this.fdiEntrenadors = fdiEntrenadors;
        });

    }
    //public cargar:boolean;
    //  private getFdiCategorias(){
    //console.log(this.nombre);
    //    this.cargar = true;
    //    this.categoriaService.getFdiCategorias().subscribe(fdiCategorias =>{
    //        console.log(fdiCategorias)
    //       this.fdiCategorias=fdiCategorias;
    //       this.cargar=false;
    //    });

    // }

    private getEdDeportistaEntrenadors() {
        //console.log(this.nombre);
        this.deportentreService.getEdDeportistaEntrenadors().subscribe(edDeportistaEntrenadors => {
            this.edDeportistaEntrenadors = edDeportistaEntrenadors;
        });

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }
}