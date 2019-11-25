import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ATQR';

  setLocalStorage(id : number){
    
    localStorage.setItem("id", id.toString());
  }
}
