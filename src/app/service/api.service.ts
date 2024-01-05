import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getDiscoverGenre(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/discover/tv?api_key=${environment.apiKey}&language=es-Es&with_genres=${id}`);
  }

  public getGenreTv(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/genre/tv/list?api_key=${environment.apiKey}&language=es-Es`);
  }

  public getDetailTv(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/tv/${id}?api_key=${environment.apiKey}&language=es-Es`);
  }
}
