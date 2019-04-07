export class Contacto {

    constructor(
        public idContacto: number,
        public nombre: string,
        public apellido: string,
        public email: string,
        public telefono: string,
        public dni: number,
        public dniStr: string,
        public monto: number,
        public plazo: number,
        public mensaje: string,
        public cbu: string,
        public idImagen: number
    ) {   
    }
}