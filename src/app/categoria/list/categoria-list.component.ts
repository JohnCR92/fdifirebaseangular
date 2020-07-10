import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component';
import { AlertasService, CategoriaService } from '../service/categoria.services';
@Component({
    selector: 'categoria-form',
    templateUrl: './categoria-list.component.html',
    styleUrls: [
        './categoria-list.component.css'
    ]
})

export class CategoriaListComponent {
    public fdiCategoria: any = {};
    public fdiCategorias: any;
    public temp_var: Object = false;

    constructor(
        private categoriaService: CategoriaService,
        private alertasService: AlertasService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        this.getFdiCategorias();
    }
    guardar() {

        //console.log(this.nombre);
        this.categoriaService.saveFdiCategoria(this.fdiCategoria).subscribe(fdiCategoria => {
            //console.log(autor);
            this.getFdiCategorias();
        });
    }

    editar(fdiCategoria: any) {

        //console.log(this.nombre);
        this.fdiCategoria = Object.assign({}, fdiCategoria);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var = true;

    }

    eliminar(fdiCategoria: any) {
        this.categoriaService.delete(fdiCategoria.categoriaId).subscribe(fdiCategoria => {
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminó la Categoria Correctamente!!")
            console.log(this.fdiCategoria);

            this.getFdiCategorias();
        })
    }

    private getFdiCategorias() {

        //console.log(this.nombre);
        this.categoriaService.getFdiCategorias().subscribe(fdiCategorias => {
            this.fdiCategorias = fdiCategorias;
            this.temp_var = true;
        });
    }




}