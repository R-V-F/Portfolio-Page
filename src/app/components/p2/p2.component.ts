import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.scss']
})
export class P2Component implements OnInit {

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
