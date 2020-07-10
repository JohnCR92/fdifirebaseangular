import { Component, OnInit } from '@angular/core';
import { ReplayComponent } from './../../+outlook/replay/replay.component';
import { LoginComponent } from "../../+auth/+login/login.component";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component';
import { AlertasService, DeportistaService } from '../service/deportistafnf.services';
import { FileUploadService } from 'app/core/service/fileupload.service';
//import { FdiPersona } from '../form/Models/person.model';
declare var $;
@Component({
    selector: 'deportistafnf-form',
    templateUrl: './deportistafnf-list.component.html',
    styleUrls: [
        './deportistafnf-list.component.css'
    ]
})

export class DeportistafnfListComponent {
    public edDeportista: any = {};
    public edDeportistas: any;
    public files: any;
    fileSelected: File = null;
    public NF:any;
    public age: number;
    public temp_var: Object = false;
    public temp_var1: Object = this.NF;
    today: number = Date.now();

    constructor(
        private deportistaService: DeportistaService,
        private alertasService: AlertasService,
        private fileuploadService: FileUploadService
    ) {

    }
    ngOnInit() {
        //this.restService.get("http://localhost:8080/autor").subscribe(autores =>{
        //  this.autores=autores;
        // console.log(this.autores,"in");
        //});
        //this.persona=new FdiPersona();
        this.getFNF();
        
    }
    guardar() {

        //console.log(this.nombre);
        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe(edDeportista => {
            //console.log(autor);
            this.getFNF();
        });
    }

    public getUrlDoc1(codigo)
  {
    return "http://localhost:8080/deportista/documento" +"/" + codigo;
  }


  public getUrlDoc2(cod)
  {
    return "http://localhost:8080/deportista/document" +"/" + cod;
  }

    editar(edDeportista: any) {

        //console.log(this.nombre);
        this.edDeportista = Object.assign({}, edDeportista);
    }

    public cargarArchivo(id) {

        if ($('#file').val() == "")
            return console.log("Error", "El archivo es obligatorio.", {});

        this.fileuploadService
            .generarFileRequest('http://localhost:8080/deportista/fotos',
                { objectID: id, numeroDoc: 3 }, this.files)
            .subscribe((response) => {
                console.log('Archivo guardado')
            });
    }

    public setArchivo(event) {
        this.files = (event.srcElement) ? event.srcElement.files : event.target.files;
    }

    location: any;


    selectObjeto(event) {
        this.fileSelected = <File>event.target.files[0];
        console.log(event)
    }

    public cargarArchivo2(ide) {

        if ($('#file2').val() == "")
            return console.log("Error", "El archivo es obligatorio.", {});

        this.fileuploadService
            .generarFileRequest('http://localhost:8080/deportista/cedulas',
                { objID: ide, numDoc: 1 }, this.files)
            .subscribe((response) => {
                console.log('Archivo guardado')
            });
    }

    public setArchivo2(event) {
        this.files = (event.srcElement) ? event.srcElement.files : event.target.files;
    }

    selectObjeto2(event) {
        this.fileSelected = <File>event.target.files[0];
        console.log(event)
    }

    guardarfoto() {
        //console.log(this.nombre);

        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe((edDeportista: any) => {
            //console.log(autor)
            this.alertasService.mostrarAlertaWarning("Actualizando", "Se Guardo la Foto Deportista Correctamente!!");
            this.cargarArchivo(edDeportista.deporId);
            window.history.back();
            this.getFNF();
            //this.cargarArchivo1(deportista.deporId);

        });

    }

    guardarcedula() {
        //console.log(this.nombre);

        this.deportistaService.saveEdDeportista(this.edDeportista).subscribe((edDeportista: any) => {
            //console.log(autor)
            this.alertasService.mostrarAlertaWarning("Actualizando", "Se Guardo la Cédula Deportista Correctamente!!");
            this.cargarArchivo2(edDeportista.deporId);
            window.history.back();
            this.getFNF();
            //this.cargarArchivo1(deportista.deporId);

        });

    }

    atras() {
        window.history.back();

    }

    cancelar() {
        this.temp_var = true;

    }

    eliminar(edDeportista: any) {
        this.deportistaService.delete(edDeportista.deporId).subscribe(edDeportista => {
            this.alertasService.mostrarAlertaInfo("Actualizando", "Se eliminó el Deportista Correctamente!!")
            console.log(this.edDeportista);
            this.getFNF();
        })
    }

    private getFNF() {

        //console.log(this.nombre);
        
        this.deportistaService.getFNF().subscribe(edDeportistas => {
            this.edDeportistas = edDeportistas;
            this.temp_var = true;
            
            
        });
    }


    CalcularEdad(prsFechaNaciemineto: Date): number {

        const today: Date = new Date();
        const birthDate: Date = new Date(prsFechaNaciemineto);
        
        if (prsFechaNaciemineto != null) {
            let age: number = today.getFullYear() - birthDate.getFullYear();
            const month: number = today.getMonth() - birthDate.getMonth();
            if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
            age--;
            return age;
        } else 
        {
            return 0;
        }



    }




}