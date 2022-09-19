import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookServices/book.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  BookingForm : FormGroup;
  booksArray: any;

  constructor(private bookService: BookService,private formBuilder: FormBuilder,private router: Router) { 

  }

  ngOnInit(): void {
    this.getCartbook();
  }
getCartbook() {
    this.bookService.getCart().subscribe((response: any) => {
      console.log(response.data);
      this.booksArray = response.data;

    });
  }
}
