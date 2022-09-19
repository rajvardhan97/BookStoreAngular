import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookServices/book.service';
import { DataService } from 'src/app/Services/dataServices/data.service';
@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
 booksArray: any;
 totalbooks:any;
 searchBook:any;

  constructor(private bookService: BookService, private data:DataService) { }

  ngOnInit(): void {
    this.getAllBook();

    this.data.incomingData.subscribe((res) => {
      console.log("Searching Process",res)
      this.searchBook = res;
    })
  }

  getAllBook() {
    this.bookService.GetAllBooks().subscribe((response: any)=>{
      this.totalbooks = response.data.length;
      this.booksArray = response.data;
      console.log("Array: ", this.booksArray);
    });
  }
  quickView(bookId:any){
    localStorage.setItem('bookId',bookId)
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
