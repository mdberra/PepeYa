import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider';
import { Contacto } from '../../model/contacto';
import { ContactoService } from '../../services/contacto.service'

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html'
})
export class SimulatorComponent implements OnInit {
  contacto = new Contacto(0, "", "", "", "", 0,"", 0, 0, "", "", 0);

  valueSlider: number = 3000;
  optionsSlider: Options = {
    floor: 1000,
    ceil: 5000,
    step: 500,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  constructor(
    private router: Router,
    private contactoService: ContactoService
  ) {
  }
  ngOnInit() { 
  }
  onPedi() {
    this.contacto.monto = this.valueSlider;
    this.contacto.plazo = 12;
    this.contactoService.setContacto(this.contacto);
    this.router.navigate(['loan1']);
  }
}
