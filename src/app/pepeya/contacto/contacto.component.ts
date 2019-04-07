import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../model/contacto';
import { ContactoService } from '../../services/contacto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  submitted = false;
  contacto = new Contacto(0, "", "", "", "", 0,"", 3000, 12, "", "", 0);

  constructor(
    private router: Router,
    private contactoService: ContactoService
  ) { }


  onSubmit() {
    this.contactoService.postContacto(this.contacto)
    .subscribe(response => {
      console.log("postContacto " + response);

      this.router.navigate(['/loan3']);
    });
  }
}