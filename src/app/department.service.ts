import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Department } from './department';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
 
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departmentsUrl = '/api/departments';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl)
    .pipe(map(data => data));
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.departmentsUrl, department, HTTP_OPTIONS)
  }

  getDepartment(id: String): Observable<Department> {
    const URL = `${this.departmentsUrl}/${id}`;
    return this.http.get<Department>(URL);
  }

  updateDepartment(id: String, department: Department): Observable<any> {
    const URL = `${this.departmentsUrl}/${id}`;
    return this.http.put(URL, department, HTTP_OPTIONS);
  }

  deleteDepartment(id: String): Observable<Department> {
    const URL = `${this.departmentsUrl}/${id}`;
    return this.http.delete<Department>(URL, HTTP_OPTIONS);
  }
}
