import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // Decorator that marks a class field as an input property and supplies configuration metadata. https://angular.io/api/core/Input
  @Input()
  text!: string;
  @Input()
  color!: string;

  // Sharing data between child and parent directives and components - https://angular.io/api/core/Output
  @Output() btnClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void { }

  onClick() {
    // console.log("Add");
    this.btnClick.emit();
  }

}
