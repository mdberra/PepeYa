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
    this.contactoService.postContacto(this.contacto)
    .subscribe(response => {
      console.log("postContacto " + response);

      this.router.navigate(['/loan2']);
    });
  }
}