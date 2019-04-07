import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../../model/contacto';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan3',
  templateUrl: './loan3.component.html',
  styles: []
})
export class Loan3Component implements OnInit {
  contacto : Contacto;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onPaso3() {
    console.log(this.contacto);
  }
}
