import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoneService {
  constructor(private firestore: AngularFirestore) {}

  saveToFirebase(bookTitle: string, imageUrl: string) {
    return this.firestore.collection('savedItems').add({
      bookTitle,
      imageUrl,
      timestamp: new Date(),
    });
  }
}
