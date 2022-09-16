import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token : any;

  constructor(private httpService: HttpService) { 
    this.token = localStorage.getItem('token')
  }
  
  GetAllBooks() {
    console.log("Getting all books");
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    return this.httpService.getService('/Books/GetAllBooks',true, header)
  }

  getBookById(bookId:any){
    console.log("getting boook");
    let header = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    console.log(header);
    return this.httpService.getService('/Books/GetBookByID?BookId=' + bookId, true, header);
  }

  getCart(UserId:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+ this.token
      })
    }
    console.log('token',this.token);
    console.log(header);
    return this.httpService.getService('/Cart/GetAllCart?UserId='+UserId, true, header);
  }

  getWishlist(UserId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.getService('/Wishlist/Getwishlist?UserId='+UserId,true,header)
  }

  removeFromWishlist(wishlistId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpService.DeleteService('/Wishlist/Removefromwishlist?wishlistId='+wishlistId,true,header)
  }
}
