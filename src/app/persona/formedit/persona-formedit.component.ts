import { DISABLED } from '@angular/forms/src/model';
import { AlertasService } from '../service/persona.services';
import { PersonaService } from '../service/persona.service';
import { Component, OnInit, ChangeDetectorRef, ViewChild, Renderer2, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Route, Params } from '@angular/router';
import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
//import { id } from '@swimlane/ngx-datatable/release/utils';
import { restservice } from '../../core/service/rest.service';
import { config } from './../../config';
import { style } from '@angular/animations';


@FadeInTop()

@Component({
    selector: 'persona-formedit',
    templateUrl: './persona-formedit.component.html',
    styleUrls: [
        './persona-formedit.component.css'
    ]
}

)


export class PersonaFormeditComponent implements OnInit {

    public tipoingreso = true;
    public confirm = true;
    public persona: any = {};
    public personas: any;

    @ViewChild('tipodis') tipodis: ElementRef;

    @ViewChild('disc') disc: ElementRef;

    @ViewChild('abc') abc: ElementRef;

    constructor(
        private activatedRoute: ActivatedRoute,
        private personaService: PersonaService,
        private alertaservice: AlertasService) {

    }

    // ngAfterViewInit(){
    //  console.log(this.disc.nativeElement.innerHTML);

    //}
    ngOnInit() {

        //console.log("init");
        console.log(config);
        this.activatedRoute.params.subscribe(params => {
            if (params['prsId']) {

                this.getFdiPersona(params['prsId']);
            }
        });



    }
    guardar() {
        console.log(this.persona)
        this.personaService.saveFdiPersona(this.persona).subscribe(persona => {//dentro de las comillas van los nombres de la base de datos "prsCedula":this.cedula
            //console.log(fdipersona);
            this.alertaservice.mostrarAlertaInfo("Actualizando", "Se Guardo la Persona correctamente !!!");

            this.atras();



        });
        /*{  "prsId":this.fdipersona,"prsApellido": this.fdipersona,"prsCedula":this.fdipersona,"prsEstadoCivil":this.fdipersona,"prsEtnia":this.fdipersona,
         "prsFechaNacimiento":this.fdipersona,"prsGrupoSanguineo":this.fdipersona,"prsLugarNacimiento":this.fdipersona,"prsLugarResidencia":this.fdipersona,"prsNombre":this.fdipersona,
         "prsOcupacion":this.fdipersona,"prsSexo":this.fdipersona,"prsTelefono":this.fdipersona


        }*/

    }



    private getFdiPersona(prsId: number) {
        this.personaService.getFdiPersona(prsId).subscribe(persona => {
            this.persona = persona;
            console.log(this.persona)
        });
    }




    cancelar() {
        this.persona = {};

    }
    atras() {
        window.history.back();

    }

    verificador = true;
    validadorDeCedula(cedula: String) {
        let cedulaCorrecta = false;
        console.log(cedula.length);

        if (cedula.length == 10) // ConstantesApp.LongitudCedula
        {

            let tercerDigito = parseInt(cedula.substring(2, 3));
            if (tercerDigito < 6) {
                // Coeficientes de validación cédula
                // El decimo digito se lo considera dígito verificador
                let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
                console.log(coefValCedula);

                let verificador = parseInt(cedula.substring(9, 10));
                let suma: number = 0;
                let digito: number = 0;
                for (let i = 0; i < (cedula.length - 1); i++) {

                    digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];


                    suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
                    console.log(suma + " suma" + coefValCedula[i]);

                }
                suma = Math.round(suma);
                console.log(verificador);
                console.log(suma);
                console.log(digito);

                if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
                    cedulaCorrecta = true;
                }
                else if ((10 - (Math.round(suma % 10))) == verificador) {
                    cedulaCorrecta = true;
                } else {
                    cedulaCorrecta = false;
                }
            } else {
                cedulaCorrecta = false;
            }
        } else {
            cedulaCorrecta = false;
        }
        if (!cedulaCorrecta) {
            /*alert("La Cédula ingresada es Incorrecta");*/

        }
        this.verificador = cedulaCorrecta;
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }







}
