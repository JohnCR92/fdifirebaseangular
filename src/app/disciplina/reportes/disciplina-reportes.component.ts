import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component';
import { AlertasService, DisciplinaService } from '../service/disciplina.services';
import { ExcelService } from 'app/core/service/excel.service';
@Component({
    selector: 'disciplina-form',
    templateUrl: './disciplina-reportes.component.html',
    styleUrls: [
        './disciplina-reportes.component.css'
    ]
})

export class DisciplinaReportesComponent {
    public fdiDisciplina: any = {};
    public fdiDisciplinas: any;
    
    public temp_var: Object = false;

    constructor(
        private disciplinaService: DisciplinaService,
        private alertasService: AlertasService,
        private excelService:ExcelService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        this.getFdiDisciplinas();
    }
    guardar() {

        //console.log(this.nombre);
        this.disciplinaService.saveFdiDisciplina(this.fdiDisciplina).subscribe(fdiDisciplina => {
            //console.log(autor);
            this.getFdiDisciplinas();
        });
    }

    editar(fdiDisciplina: any) {

        //console.log(this.nombre);
        this.fdiDisciplina = Object.assign({}, fdiDisciplina);
    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var = true;

    }

    eliminar(fdiDisciplina: any) {
        this.disciplinaService.delete(fdiDisciplina.disciplinaId).subscribe(fdiDisciplina => {
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminó la Disciplina Deportiva Correctamente!!")
            console.log(this.fdiDisciplina);

            this.getFdiDisciplinas();
        })
    }


    private getFdiDisciplinas() {

        //console.log(this.nombre);
        this.disciplinaService.getFdiDisciplinas().subscribe(fdiDisciplinas => {
            this.fdiDisciplinas = fdiDisciplinas;
            this.temp_var = true;
        });
    }

    exportAsXLSX():void {
        this.excelService.exportAsExcelFile(this.fdiDisciplinas, 'ReporteExcel');
      }


}