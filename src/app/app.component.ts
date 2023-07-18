import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
    firstName = "Samantha";
    lastName= "Booker";
  

isDisabled:boolean = true;

savedMessage: string ="";

 constructor(){
  setTimeout(()=>{
    this.isDisabled = false;
  },2000);

 }

onSave(): void {
  this.savedMessage = "Created Meeting"
}

}