import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
   openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
   closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
}
