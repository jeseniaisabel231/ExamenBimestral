import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/titulos.service'; // Asegúrate de tener este servicio creado
import { FirestoneService } from 'src/app/services/firebase.service';


interface DogImageResponse {
  message: string; // URL de la imagen
  status: string;  // Estado de la respuesta, como "success"
}
@Component({
  selector: 'app-cuentos',
  templateUrl: './cuentos.page.html',
  styleUrls: ['./cuentos.page.scss'],
})

export class CuentosPage implements OnInit {
  items: any[] = []; // Array para almacenar los datos (título + imagen)
  loading: boolean = true; // Para mostrar un spinner mientras se cargan los datos

  constructor(private apiService: ApiService, private firestoneService: FirestoneService) {}

  ngOnInit() {
    this.loadItems();
  }

  async loadItems() {
    try {
      const books: any = await this.apiService.getBookTitles().toPromise(); // Obtén los títulos de los libros
      const bookList = books.results.slice(0, 10); // Limita a 10 elementos
  
      for (let book of bookList) {
        const randomImage = await this.apiService.getRandomDogImage().toPromise(); // Respuesta tipada
        this.items.push({
          title: book.title,
          imageUrl: randomImage.message, // La URL de la imagen del perro
        });
      }
    } catch (error) {
      console.error('Error al cargar los datos', error);
    } finally {
      this.loading = false; // Finaliza el spinner
    }
  }
  
  

  saveItem(item: any) {
    this.firestoneService
      .saveToFirebase(item.title, item.imageUrl)
      .then(() => alert('Elemento guardado correctamente'))
      .catch((err) => console.error('Error al guardar en Firebase:', err));
  }
}
