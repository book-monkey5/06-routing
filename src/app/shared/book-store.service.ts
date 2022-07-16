import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private books: Book[] = [];

  constructor() {
    this.books = [
      {
        isbn: '12345',
        title: 'Tierisch gut kochen',
        authors: ['Mrs Chimp', 'Mr Gorilla'],
        published: '2022-06-20',
        subtitle: 'Rezepte von Affe bis Zebra',
        thumbnailUrl: 'https://ng-buch.de/kochen.jpg',
        description: 'Immer lecker und gut'
      },
      {
        isbn: '67890',
        title: 'Backen mit Affen',
        authors: ['Orang Utan'],
        published: '2022-07-15',
        subtitle: 'Bananenbrot und mehr',
        thumbnailUrl: 'https://ng-buch.de/backen.jpg',
        description: 'Tolle Backtipps für Mensch und Tier'
      }
    ];
  }

  getAll(): Book[] {
    return this.books;
  }

  getSingle(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }
}
