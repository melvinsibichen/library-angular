import { Component } from '@angular/core';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent {
  title=""
  author=""
  description=""
  publisher=""
  language=""
  distributors=""
  releasedyear=""
  price=""
  image=""
  
  readValues = ()=>{
    let books:any = {
      "title":this.title,
      "author":this.author,
      "description":this.description,
      "publisher":this.publisher,
      "language":this.language,
      "distributors":this.distributors,
      "releasedyear":this.releasedyear,
      "price":this.price,
      "image":this.image
    }
    console.log(books)
  }
}