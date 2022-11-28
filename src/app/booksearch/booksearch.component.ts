import { Component } from '@angular/core';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BookSearchComponent {
  title=""

  readValues = ()=>{
    let value:any = {"title":this.title}
    console.log(value)
  }
}