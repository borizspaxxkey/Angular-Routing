import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  outletHTML = '<router-outlet></router-outlet>';
  constructor() { }

  ngOnInit() {
  }

}
