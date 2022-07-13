import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.scss']
})
export class P1Component implements OnInit {

  constructor() { }
  long_dscr = false;

  ngOnInit(): void {
    
  }

  toggleShort() {
    this.long_dscr = false;
  }
  toggleLong() {
    this.long_dscr = true;
  }

}
