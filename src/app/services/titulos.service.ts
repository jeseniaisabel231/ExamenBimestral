import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getRandomDogImage(): Observable<DogImageResponse> {
    return this.http.get<{ message: string; status: string }>(environment.apiUrls.dogImage);

  }

  getBookTitles() {
    return this.http.get(environment.apiUrls.books);
  }
}
