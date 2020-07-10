import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { CentrenamientoService } from './../service/centrenamiento.service';
import { LoginComponent } from "../../+auth/+login/login.component";
import { config } from "./../../config";
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { id } from '@swimlane/ngx-datatable/release/utils';
import { AlertasService, CategoriaService } from '../service/categoria.services';
@Component({
    selector: 'categoria-form',
    templateUrl: './categoria-form.component.html',
    styleUrls: [
        './categoria-form.component.css'
    ]
})

export class CategoriaFormComponent {
    public fdiCategoria: any = {};
    public fdiCategorias: any;

    constructor(
        private categoriaService: CategoriaService,
        private activatedRoute: ActivatedRoute,
        private alertasService: AlertasService

    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        this.getFdiCategorias();
        console.log(config);
        this.activatedRoute.params.subscribe(params => {
            if (params['categoriaId']) {
                console.log(params);
                this.getFdiCategoria(params['categoriaId']);
            }
        })
    }

    private getFdiCategoria(categoriaId: number) {
        this.categoriaService.getFdiCategoria(categoriaId).subscribe(fdiCategoria => {
            this.fdiCategoria = fdiCategoria;
        });

    }
    guardar() {

        //console.log(this.nombre);
        this.categoriaService.saveFdiCategoria(this.fdiCategoria).subscribe(fdiCategoria => {
            //console.log(autor);
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se guardo la Categoria Correctamente!!")
            window.history.back();
            this.getFdiCategorias();
        });
    }

    editar(fdiCategoria: any) {

        //console.log(this.nombre);
        this.alertasService.mostrarAlertaInfo("Actualizando", "Se actualizó la Categoria Correctamente!!")
        this.fdiCategoria = Object.assign({}, this.fdiCategoria);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        //console.log(this.nombre);
        this.fdiCategoria = {};
    }


    private getFdiCategorias() {

        //console.log(this.nombre);
        this.categoriaService.getFdiCategorias().subscribe(fdiCategorias => {
            this.fdiCategorias = fdiCategorias;
        });
    }


    submitted = false;

    onSubmit() {
        this.submitted = true;
    }


}