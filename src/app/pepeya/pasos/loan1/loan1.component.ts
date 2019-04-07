import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../../model/contacto';
import { ContactoService } from '../../../services/contacto.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan1',
  templateUrl: './loan1.component.html'
})
export class Loan1Component {

  submitted = false;
  contacto : Contacto;

  constructor(
    private router: Router,
    private contactoService: ContactoService
  ) {
    this.contacto = this.contactoService.getContacto();
  }

  onPaso2() {
    this.contacto.dni = Number(this.contacto.dniStr);
    if(this.contacto.dni > 1000000 && this.contacto.dni < 99999999) {
      this.contactoService.setContacto(this.contacto);
      this.contactoService.postContacto(this.contacto)
        .subscribe(response => {
          console.log("postContacto " + response);

          this.router.navigate(['/loan2']);
        });
    }
  }
}