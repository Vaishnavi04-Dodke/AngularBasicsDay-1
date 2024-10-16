import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number;
  color: string;
  alignment: string;
  size:string;

  constructor() {
    this.count = 0;
    this.color = 'text-secondary';
    this.alignment = 'text-right';
    this.size=''
  }

  clickHandler() {
    console.log(this.count++);
  }

  resetHandler() {
    console.log(this.count = 0);
  }

  changeColor(colorName: string) {
    switch (colorName) {
      case 'red':
        this.color = 'text-danger';
        break;
      case 'green':
        this.color = 'text-success';
        break;
      case 'blue':
        this.color = 'text-primary';
        break;
      case 'black':
        this.color = 'text-dark';
        break;
    }
  }

  alignmentChanger(alignmentName: string) {
    switch (alignmentName) {
      case 'center':
        this.alignment = 'text-center';
        break;
      case 'left':
        this.alignment = 'text-start';  
        break;
      case 'right':
        this.alignment = 'text-end';  
        break;
    }
  }
  sizeChanger(sizeName:string){
switch(sizeName){
  case 'small':
    this.size='display-6'
    break;
    case 'medium':
      this.size='display-4'
      break;
      case 'large':
        this.size='display-1'
        break;


}
  }
}
