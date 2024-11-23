import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrls = environment.apiUrls
  private list_books: number[]=[];

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  getRandomDogImage(): Observable<any> {
    return this.http.get<{ message: string; status: string }>(this.apiUrls.dogImage);
  }

  getBookTitles() {
    for (let i = 0; i < 10; i++) {

      let valor=Math.floor(Math.random()*100)
      if (valor>100){
        valor=valor-50
      }
      this.list_books.push(valor)
    }
    return this.http.get(`${this.apiUrls.books}${this.list_books.join(',')}`);
  }

  saveToFirebase(bookTitle: string, imageUrl: string) {
    return this.firestore.collection('savedBooks').add({
      bookTitle,
      imageUrl,
      timestamp: new Date(),
    });
  }
}
