import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/titulos.service';

@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.page.html',
  styleUrls: ['./cuentos.page.scss'],
})
export class CuentosPage implements OnInit {
  
  public loading: boolean = true;
  public books: any[] = [];
  public image: string[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadItems();
    this.loadImages();
  }

  loadItems() {
    this.apiService.getBookTitles().subscribe({
      next: (data: any) => {
        data.results.map((libro: any) => this.books.push(libro.title));
        console.log(this.books);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  loadImages() {
    for (let i = 0; i < 10; i++) {
      this.apiService.getRandomDogImage().subscribe({
        next: (img: any) => {
          this.image.push(img.message);
        },
      });
    }
    console.log(this.image)
  }

  saveItem(image:string, title:string ) {
    this.apiService
      .saveToFirebase(title, image)
      .then(() => alert('Elemento guardado correctamente'))
      .catch((err) => console.error('Error al guardar en Firebase:', err));
  }
}
