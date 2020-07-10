import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component'; 
import { AlertasService, CategoriaDisciplinaService } from '../service/categoriadisciplina.services';
import { ExcelService } from 'app/core/service/excel.service';
@Component({
    selector: 'categoriadisciplina-form',
    templateUrl: './categoriadisciplina-reportes.component.html',
    styleUrls: [
        './categoriadisciplina-reportes.component.css'
    ]
})

export class CategoriaDisciplinaReportesComponent {
    public fdiCategoriaDisciplina: any = {};
    public fdiCategoriaDisciplinas:any;
    public temp_var: Object=false;

    constructor(
        private categoriadisciplinaService: CategoriaDisciplinaService,
        private alertasService: AlertasService,
        private excelService:ExcelService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        this.getFdiCategoriaDisciplinas();
    }
    guardar() {

        //console.log(this.nombre);
        this.categoriadisciplinaService.saveFdiCategoriaDisciplina(this.fdiCategoriaDisciplina).subscribe(fdiCategoriaDisciplina => {
            //console.log(autor);
            this.getFdiCategoriaDisciplinas();
        });
    }

    editar(fdiCategoriaDisciplina: any) {

        //console.log(this.nombre);
        this.fdiCategoriaDisciplina = Object.assign({}, fdiCategoriaDisciplina);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var=true;
     
    }

    eliminar(fdiCategoriaDisciplina: any) {
        this.categoriadisciplinaService.delete(fdiCategoriaDisciplina.catdisciId).subscribe(fdiCategoriaDisciplina => {
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminó la Categoria con su respectiva Disciplina Deportiva Correctamente!!")
            console.log(this.fdiCategoriaDisciplina);

            this.getFdiCategoriaDisciplinas();
        })
    }


    private getFdiCategoriaDisciplinas() {

        //console.log(this.nombre);
        this.categoriadisciplinaService.getFdiCategoriaDisciplinas().subscribe(fdiCategoriaDisciplinas => {
            this.fdiCategoriaDisciplinas = fdiCategoriaDisciplinas;
            this.temp_var=true;
        });
    }

    exportAsXLSX():void {
        this.excelService.exportAsExcelFile(this.fdiCategoriaDisciplinas, 'ReporteExcel');
        this.temp_var=true;
      }


}