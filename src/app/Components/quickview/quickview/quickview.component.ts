import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookServices/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  Book: any;
  bookId:any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId')
    console.log(this.bookId);
    this.getBookById(this.bookId);
  }

  getBookById(bookId:any){
    this.bookService.getBookById(bookId).subscribe((response: any) => {
      console.log(response.data);
      this.Book = response.data;
    });
  }
}
