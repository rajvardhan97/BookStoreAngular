import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookServices/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
 booksArray: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.GetAllBooks().subscribe((response: any)=>{
      console.log(response);
      this.booksArray = response.data;
      console.log("Array: ", this.booksArray);
    });
  }
  lowtohigh(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> low.DiscountPrice-high.DiscountPrice);
    }
  hightolow(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> high.DiscountPrice-low.DiscountPrice);
  }
  newestarrivals(){
    this.booksArray.reverse();
  }
}
