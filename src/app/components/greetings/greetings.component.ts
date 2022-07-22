import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {

  @Input()
  contact_ref: any;  

  constructor() { }

  ngOnInit(): void {
  }

  toContact() {
    this.contact_ref.scrollIntoView();
  }

}
