import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

interface Location {
    latitude: string;
    longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLocation(): Observable <any> {
      return this.http.get<Location>('http://api.ipapi.com/103.124.249.250?access_key=e312bc8669c2e66f75156aa3a4db15f5');
  }
}
