import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'angular-projects';

  constructor(){}

  // https://angular.io/guide/lifecycle-hooks
  // Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties.
  ngOnInit(): void{}

  toggleAddTask(){
    console.log("Toggle");    
  }
}
