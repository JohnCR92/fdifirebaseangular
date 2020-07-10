import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { CategoriaDisciplinaService } from './../service/categoriadisciplina.service';
import { LoginComponent } from "../../+auth/+login/login.component";
import { config } from '../../shared/smartadmin.config';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { AlertasService } from '../service/categoriadisciplina.services';
import { DisciplinaService } from '../../disciplina/service/disciplina.service';
import { CategoriaService } from '../../categoria/service/categoria.service';

@FadeInTop()
@Component({
    selector: 'categoriadisciplina-formeditcd',
    templateUrl: './categoriadisciplina-formeditcd.component.html',
    styleUrls: ['./categoriadisciplina-formeditcd.component.css']
})

export class CategoriaDisciplinaFormeditcdComponent {
    public fdiCategoriaDisciplina: any = {

        "fdiCategoria": {},
        "fdiDisciplina": {}

    };
    selected: string = "";
    public fdiCategoriaDisciplinas: any;
    fdiDisciplinas: any;
    fdiCategorias: any;
    public entorno: string = config.environment;
    constructor(private categoriadisciplinaService: CategoriaDisciplinaService,
        private activatedRoute: ActivatedRoute,
        private alertaService: AlertasService,
        private disciplinaService: DisciplinaService,
        private categoriaService: CategoriaService
    ) {

    }
    ngOnInit() {
        this.getFdiCategoriaDisciplinas();
        this.getFdiDisciplinas();
        this.getFdiCategorias();
        console.log(config);

        this.entorno = config.environment;

        this.activatedRoute.params.subscribe(params => {
            if (params['catdisciId']) {
                this.getFdiCategoriaDisciplina(params['catdisciId']);

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

    private getFdiCategoriaDisciplina(catdisciId: number) {
        this.categoriadisciplinaService.getFdiCategoriaDisciplina(catdisciId).subscribe(fdiCategoriaDisciplina => {
            this.fdiCategoriaDisciplina = fdiCategoriaDisciplina;

            console.log(this.fdiCategoriaDisciplina)
        });

    }


    guardar() {
        //console.log(this.nombre);
        console.log(this.fdiCategoriaDisciplina)
        this.categoriadisciplinaService.saveFdiCategoriaDisciplina(this.fdiCategoriaDisciplina).subscribe(fdiCategoriaDisciplina => {
            //console.log(autor);

            this.alertaService.mostrarAlertaInfo("Actualizando", "Se a Actualizado la Categoria con su respectiva Disciplina Correctamente!!")
            window.history.back();

            this.getFdiCategoriaDisciplinas();
        });

    }
    compare(fromListValue, fromSaveValue) {
        return fromListValue && fromSaveValue ? fromListValue.catdisciId === fromSaveValue.catdisciId : null;
    }
    editar(fdiCategoriaDisciplina: any) {
        //console.log(this.nombre);
        this.fdiCategoriaDisciplina = Object.assign({}, fdiCategoriaDisciplina);
    }
    cancelar() {
        //console.log(this.nombre);
        this.fdiCategoriaDisciplina = {
            "fdiCategoria": {},
            "fdiDisciplina": {}
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
    public cargar: boolean;
    private getFdiCategorias() {
        //console.log(this.nombre);
        this.cargar = true;
        this.categoriaService.getFdiCategorias().subscribe(fdiCategorias => {
            console.log(fdiCategorias)
            this.fdiCategorias = fdiCategorias;
            this.cargar = false;
        });

    }

    private getFdiCategoriaDisciplinas() {
        //console.log(this.nombre);
        this.categoriadisciplinaService.getFdiCategoriaDisciplinas().subscribe(fdiCategoriaDisciplinas => {
            this.fdiCategoriaDisciplinas = fdiCategoriaDisciplinas;
        });

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }
}