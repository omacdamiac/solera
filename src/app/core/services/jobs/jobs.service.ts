import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { END_POINT } from "../../const/constantes";
import { InterfaceJobs } from "../../models/jobs.model";

@Injectable({
  providedIn: "root",
})
export class JobsService {
  _itemData = new BehaviorSubject<InterfaceJobs.IJobs[]>([]);
  itemData = this._itemData.asObservable();
  constructor(private http: HttpClient) {}

  getJobs(): Observable<InterfaceJobs.IJobs[]> {
    let api = `${environment.api_Base}${END_POINT.GET_OFICIOS}`;
    return this.http.get<InterfaceJobs.IJobs[]>(api);
  }

  createJob(item: InterfaceJobs.IJobs): Observable<InterfaceJobs.IJobs>{
    let api = `${environment.api_Base}${END_POINT.GET_OFICIOS}`
    return this.http.post<InterfaceJobs.IJobs>(api, item)
  }

  updateJob(oficio: any):Observable<InterfaceJobs.IJobs>{
    let api = `${environment.api_Base}${END_POINT.GET_OFICIOS}/${oficio.id}`;
    return this.http.put<InterfaceJobs.IJobs>(api, oficio)
  }

  delete(id: number): Observable<InterfaceJobs.IJobs> {
    let api = `${environment.api_Base}${END_POINT.GET_OFICIOS}/${id}`;
    return this.http.delete<InterfaceJobs.IJobs>(api);
  }
}
