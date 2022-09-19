import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookServices/book.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist:any;
  UserId : any;
  constructor(private book : BookService) { }

  ngOnInit(): void {
    this.getWishlist();
  }
  getWishlist(){
    this.book.getWishlist().subscribe((response: any) => {
      console.log( response.data);
      this.wishlist = response.data;
    });
  }

  removeFromWishlist(wishistId:any){
    this.book.removeFromWishlist(wishistId).subscribe((response: any) => {
      console.log(response.data);
      this.getWishlist();
    });
  }
}
