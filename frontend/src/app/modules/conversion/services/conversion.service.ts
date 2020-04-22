import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const require: any;
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { IConvert } from '../../../shared/interfaces/conversion.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  private baseUrl =
  //  process.env.NODE_ENV === "production"? `/api/v1/convert` : 
  `http://localhost:3000/api/v1/convert`;

  constructor(private readonly http: HttpClient) {}

 

  isValid(payload: IConvert): Observable<any>{
    return this.http.post(this.baseUrl, payload)
    .pipe(
      catchError(e => {
        console.log('error', e)
        return of({ message: "", error: true })
      })
    )
  }
}
