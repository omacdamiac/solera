import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { END_POINT } from '../../const/constantes';
import { InterfaceJobs } from '../../models/jobs.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getMain(): Observable<InterfaceJobs.INav[]>{
    let api = `${environment.api_Base}${END_POINT.GET_MAIN}`;
    return this.http.get<InterfaceJobs.INav[]>(api);
  }
}
