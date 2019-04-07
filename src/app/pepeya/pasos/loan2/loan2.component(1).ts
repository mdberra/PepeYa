import { Component, OnInit, EventEmitter } from '@angular/core';
import { ContactoService } from '../../../services/contacto.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loan2',
  templateUrl: './loan2.component.html'
})
export class Loan2Component implements OnInit {
  submitted = false;

  selectedDniFile: File = null;
  selectedSueldo1File: File = null;
  selectedSueldo2File: File = null;
  selectedCbuFile: File = null;
  selectedTicketFile: File = null;
  fout: File = null;
  imageChangedEvent: any = '';
  croppedImage: any = '';


  avance$Dni: Observable<number>;
  avance$Sueldo1: Observable<number>;
  avance$Sueldo2: Observable<number>;
  avance$Cbu: Observable<number>;
  avance$Ticket: Observable<number>;

  avanceDni = 0;
  avanceSueldo1 = 0;
  avanceSueldo2 = 0;
  avanceCbu = 0;
  avanceTicket = 0;

  private server;

  constructor(
    private router: Router,
    private contactoService: ContactoService,
    private ng2ImgMax: Ng2ImgMaxService,
    private spinner: NgxSpinnerService
  ) {
  }
  ngOnInit() {
    this.avance$Dni = this.contactoService.getAvance$Dni();
    this.avance$Dni.subscribe(avanceDni => this.avanceDni = avanceDni);
    this.avance$Sueldo1 = this.contactoService.getAvance$Sueldo1();
    this.avance$Sueldo1.subscribe(avanceSueldo1 => this.avanceSueldo1 = avanceSueldo1);
    this.avance$Sueldo2 = this.contactoService.getAvance$Sueldo2();
    this.avance$Sueldo2.subscribe(avanceSueldo2 => this.avanceSueldo2 = avanceSueldo2);
    this.avance$Cbu = this.contactoService.getAvance$Cbu();
    this.avance$Cbu.subscribe(avanceCbu => this.avanceCbu = avanceCbu);
    this.avance$Ticket = this.contactoService.getAvance$Ticket();
    this.avance$Ticket.subscribe(avanceTicket => this.avanceTicket = avanceTicket);
  }
  onDniSelected(event) {
    this.spinner.show();
    const f: File = <File> event.target.files[0];
    this.ng2ImgMax.compressImage(f, 0.2).subscribe(
      result => {
        this.selectedDniFile = new File([result], result.name);
        console.log(this.selectedDniFile);

        const fd: FormData = new FormData();
        fd.append('dni', String(this.contactoService.getContacto().idContacto));
        fd.append('tipoFile', 'Dni');
        fd.append('imageDni', this.selectedDniFile);
        this.spinner.hide();
        this.contactoService.upload("Dni", fd);
    }, error => {
        this.spinner.hide();
        console.log('ERROR ng2ImgMax.compressImage', error);
      }
    );
  }

  onSueldo1Selected(event) {
    this.spinner.show();
    const f: File = <File> event.target.files[0];
    this.ng2ImgMax.compressImage(f, 0.2).subscribe(
      result => {
          this.selectedSueldo1File = new File([result], result.name);
          console.log(this.selectedSueldo1File);

          const fd: FormData = new FormData();
          fd.append('dni', String(this.contactoService.getContacto().idContacto));
          fd.append('tipoFile', 'Sueldo1');
          fd.append('imageSueldo1', this.selectedSueldo1File);
          this.spinner.hide();
          this.contactoService.upload("Sueldo1", fd);
      }, error => {
          this.spinner.hide();
          console.log('ERROR ng2ImgMax.compressImage', error);
      }
    );
  }
  onSueldo2Selected(event) {
    this.spinner.show();
    const f: File = <File> event.target.files[0];
    this.ng2ImgMax.compressImage(f, 0.2).subscribe(
      result => {
          this.selectedSueldo2File = new File([result], result.name);
          console.log(this.selectedSueldo2File);

          const fd: FormData = new FormData();
          fd.append('dni', String(this.contactoService.getContacto().idContacto));
          fd.append('tipoFile', 'Sueldo2');
          fd.append('imageSueldo2', this.selectedSueldo2File);
          this.spinner.hide();
          this.contactoService.upload("Sueldo2", fd);
      }, error => {
          this.spinner.hide();
          console.log('ERROR ng2ImgMax.compressImage', error);
      }
    );
  }
  onCbuSelected(event) {
    this.spinner.show();
    const f: File = <File> event.target.files[0];
    this.ng2ImgMax.compressImage(f, 0.2).subscribe(
      result => {
        this.selectedCbuFile = new File([result], result.name);
        console.log(this.selectedCbuFile);

        const fd: FormData = new FormData();
        fd.append('dni', String(this.contactoService.getContacto().idContacto));
        fd.append('tipoFile', 'Cbu');
        fd.append('imageCbu', this.selectedCbuFile);
        this.spinner.hide();
        this.contactoService.upload("Cbu", fd);
      }, error => {
        this.spinner.hide();
        console.log('ERROR ng2ImgMax.compressImage', error);
      }
    );
  }
  onTicketSelected(event) {
    this.spinner.show();
    const f: File = <File> event.target.files[0];
    this.ng2ImgMax.compressImage(f, 0.2).subscribe(
      result => {
        this.selectedTicketFile = new File([result], result.name);
        console.log(this.selectedTicketFile);

        const fd: FormData = new FormData();
        fd.append('dni', String(this.contactoService.getContacto().idContacto));
        fd.append('tipoFile', 'Ticket');
        fd.append('imageTicket', this.selectedTicketFile);
        this.spinner.hide();
        this.contactoService.upload("Ticket", fd);
    }, error => {
        this.spinner.hide();
        console.log('ERROR ng2ImgMax.compressImage', error);
    }
  );
  }
  onPaso3() {
    if(this.avanceDni === 100 && this.avanceSueldo1 === 100 && this.avanceSueldo2 === 100 &&
       this.avanceCbu === 100 && this.avanceTicket === 100) {
      this.router.navigate(['/loan3']);
    } else {
      console.log("Falta algun archivo")
    }
  }
}