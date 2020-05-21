import { Injectable, Inject } from '@angular/core';
import { Producto } from '../farmacia/models/producto';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

const httpOptionsPut = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService)
{
    this.baseUrl = baseUrl;
}

  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl + 'api/Producto')
      .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Producto[]>('Consulta Producto', null))
      );
  }

  post(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.baseUrl + 'api/Producto', producto)
      .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Producto>('Registrar Producto', null))
      );
  }

  getByIdentificacion(codigoP:string): Observable<Producto> {
    return this.http.get<Producto>(this.baseUrl + 'api/Producto/' + codigoP)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Producto>('Consulta de Producto', null))
        );
  }

  put(producto: Producto): Observable<any> {
    const url = `${this.baseUrl}api/producto/${producto.codigoP}`;
    return this.http.put(url, producto, httpOptions)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<any>('Editar Producto'))
    );
  }

  getId(id: string): Observable<Producto> {
    const url = `${this.baseUrl + 'api/producto'}/${id}`;
      return this.http.get<Producto>(url, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Producto>('Buscar Producto', null))
      );
  }

  delete(producto: Producto| string): Observable<string> {
    const id = typeof producto === 'string' ? producto : producto.codigoP;
    return this.http.delete<string>(this.baseUrl + 'api/producto/'+ id)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<string>('Elimiar Producto', null))
    );
  }
}

