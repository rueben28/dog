import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  getRandomImage(): Observable<any> {
    return this._http.get("https://dog.ceo/api/breeds/image/random/10");
  }

  getBreedImage(breedName: string): Observable<any> {
    let url = `https://dog.ceo/api/breed/${breedName}/images/random/10`;
    return this._http.get(url)
  }


}
