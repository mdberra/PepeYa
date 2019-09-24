import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable ,  of ,  Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Contacto } from '../model/contacto';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({providedIn: 'root'})
export class ContactoService {
    private url: string = "http://35.243.241.239:5000";
    private urlLocal: string = "http://localhost:5000";
    
    private urlContacto: string = this.url + "/api/pepeya/contacto";
    private urlImage: string = this.url + "/api/pepeya/image";
    private idImagen:string;
    private contacto: Contacto;
    public avance$Dni = new Subject<number>();
    public avance$Sueldo1 = new Subject<number>();
    public avance$Sueldo2 = new Subject<number>();
    public avance$Cbu = new Subject<number>();
    public avance$Ticket = new Subject<number>();

    constructor( private httpClient: HttpClient ) {
    }
    public setContacto(_contacto: Contacto) {
      this.contacto = _contacto;
    }
    public getContacto() : Contacto {
      return this.contacto;
    }
    public getIdImagen() : String {
      this.idImagen = String(this.contacto.idImagen) + "-" + String(this.contacto.dni);
      return this.idImagen;
    }
    public postContacto(_contacto: Contacto): Observable<Contacto> {
      this.contacto = _contacto;
      return this.httpClient.post<Contacto>(this.urlContacto, this.contacto, httpOptions)
      .pipe(
          tap((_contacto: Contacto) => {
              this.contacto = _contacto;
            }),
          catchError(this.handleError<Contacto>('postContacto')
          )
      );
    } 
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    getAvance$Dni(): Observable<number> {
      return this.avance$Dni.asObservable();
    }
    getAvance$Sueldo1(): Observable<number> {
      return this.avance$Sueldo1.asObservable();
    }
    getAvance$Sueldo2(): Observable<number> {
      return this.avance$Sueldo2.asObservable();
    }
    getAvance$Cbu(): Observable<number> {
      return this.avance$Cbu.asObservable();
    }
    getAvance$Ticket(): Observable<number> {
      return this.avance$Ticket.asObservable();
    }

    public upload(tipo: string, fd: FormData) {
      console.log("Upload httpCliente.post ", tipo, fd);
      this.httpClient.post(this.urlImage, fd, {reportProgress: true, observe: 'events'}).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          const percentDone = Math.round((100 * event.loaded) / event.total);
          switch(tipo) {
            case 'Dni': {
              this.avance$Dni.next(percentDone);
              break;
            }
            case 'Sueldo1': {
              this.avance$Sueldo1.next(percentDone);
              break;
            }
            case 'Sueldo2': {
              this.avance$Sueldo2.next(percentDone);
              break;
            }
            case 'Cbu': {
              this.avance$Cbu.next(percentDone);
              break;
            }
            case 'Ticket': {
              this.avance$Ticket.next(percentDone);
              break;
            }
            default: {
              break;
            }
          }
        } else {
          if(event.type === HttpEventType.Response) {
            console.log('UploadFinish:' + event);
            switch(tipo) {
              case 'Dni': {
                this.avance$Dni.next(100);
                break;
              }
              case 'Sueldo1': {
                this.avance$Sueldo1.next(100);
                break;
              }
              case 'Sueldo2': {
                this.avance$Sueldo2.next(100);
                break;
              }
              case 'Cbu': {
                this.avance$Cbu.next(100);
                break;
              }
              case 'Ticket': {
                this.avance$Ticket.next(100);
                break;
              }
              default: {
                break;
              }
            }
          }
        }
      }, error => {
        console.log('ERROR - Upload: httpClient.post', error);
      }
      );
    }
}