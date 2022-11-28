import { Component } from '@angular/core';

@Component({
  selector: 'app-bookdelete',
  templateUrl: './bookdelete.component.html',
  styleUrls: ['./bookdelete.component.css']
})
export class BookDeleteComponent {
  title=""

  readValues = ()=>{
    let value:any = {"title":this.title}
    console.log(value)
  }
}