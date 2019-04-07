import { Contacto } from './contacto';

export class Mail {
   private privez: boolean = true;
   public url: string;

   private server;

   constructor() {
      if(this.privez) {
         this.privez=false;
         this.setting();
      }
   }
   setting() {
      this.url = "http://";
   }
}