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
import { SriPersona } from './Models/sripersona.model';
import { FdiPersona } from './Models/person.model';


@FadeInTop()

@Component({
    selector: 'persona-form',
    templateUrl: './persona-form.component.html',
    styleUrls: [
        './persona-form.component.css'
    ]
}

)


export class PersonaFormComponent implements OnInit {

    public topics = ['n', 'Cédula', 'Pasaporte', 'Sin Identificación'];

    defaultOption = null;



    public confirm = true;
    public persona: any = {};
    public personas: any;
    public sripersona: any;
    public person: any;
    public posicion = 1;
    public posicion2 = 2;
    public posicion3 = 3;




    constructor(
        private activatedRoute: ActivatedRoute,
        private personaService: PersonaService,
        private alertaservice: AlertasService) {

    }


    public camb: boolean = false;
    public camb2: boolean = false;
    public camb3: boolean = false;
    cposicion(val) {
        this.posicion = val;
        this.posicion2 = val;
        this.posicion3 = val;
    }

    cambio(value) {
        if (value == 1) {
            console.log(value)
            return this.camb = true, this.camb3 = false, this.camb2 = false;
        }
        else
            if (value == 2) {
                console.log(value)
                return this.camb2 = true, this.camb = false, this.camb3 = false;
            }
            else
                if (value == 3) {
                    console.log(value)
                    return this.camb3 = true, this.camb2 = false, this.camb = false;
                }

    }

    ngOnInit() {

        this.sripersona = new SriPersona();
        this.person = new FdiPersona();
        //console.log("init");
        console.log(config);



        this.activatedRoute.params.subscribe(params => {
            if (params['prsId']) {

                this.getfdiPersona(params['prsId']);


            }
        });



    }

    public getPersonanuevo(p) {
        if (p != null) {
            this.personaService.getSriCedula(p).subscribe(recibes => {
                this.sripersona = recibes
                console.log(this.sripersona);
                for (let index = 0; index < this.sripersona.length; index++) {
                    this.sripersona = this.sripersona[index];
                    console.log(this.sripersona);
                }
            })

        }
    }


    guardar() {
        this.person.prsCedula = this.sripersona.sriCedula;
        this.person.prsNombre = this.sripersona.sriNombre;
        this.person.prsApellido = this.sripersona.sriApellido;
        this.person.prsFechaNaciemineto = this.sripersona.sriFechaNaciemineto;
        this.person.prsCorreo = this.sripersona.sriCorreo;
        this.person.prsDirRecidencia = this.sripersona.sriDirRecidencia;
        this.person.prsTipoDiscapacidad = this.sripersona.sriTipoDiscapacidad;
        this.person.prsEstadoCivil = this.sripersona.sriEstadoCivil;
        this.person.prsEtnia = this.sripersona.sriEtnia;
        this.person.prsGrupoSanguineo = this.sripersona.sriGrupoSanguineo;
        this.person.prsNommadre = this.sripersona.sriNommadre;
        this.person.prsNompadre = this.sripersona.sriNompadre;
        this.person.prsOcupacion = this.sripersona.sriOcupacion;
        this.person.prsSexo = this.sripersona.sriSexo;
        this.person.prsTelefono = this.sripersona.sriTelefono;
        this.person.prsTelpadres = this.sripersona.sriTelpadres;
        this.person.prsCanton = this.sripersona.sriCanton;
        this.person.prsNacionalidad = this.sripersona.sriNacionalidad;
        this.person.prsParroquia = this.sripersona.sriParroquia;
        this.person.prsProvincia = this.sripersona.sriProvincia
        this.personaService.saveFdiPersona(this.person).subscribe(persona => {//dentro de las comillas van los nombres de la base de datos "prsCedula":this.cedula

            //console.log(fdipersona);
            this.alertaservice.mostrarAlertaInfo("Actualizando", "Se Guardo los Datos de la Persona Correctamente !!");

            this.atras();



        });

    }



    private getfdiPersona(prsId: number) {
        this.personaService.getFdiPersona(prsId).subscribe(persona => {
            this.persona = persona;
        });
    }

    cancelar() {
        this.sripersona = {};

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