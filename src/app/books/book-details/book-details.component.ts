import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  standalone: false,
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book?: Book;
  constructor(
    private service: BookStoreService,
    private route: ActivatedRoute,
  ) {
    const isbn = this.route.snapshot.paramMap.get('isbn')!;
    this.book = this.service.getSingle(isbn);
  }
}
