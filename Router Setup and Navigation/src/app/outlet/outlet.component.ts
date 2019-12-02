import { Component } from '@angular/core';

@Component({
  selector: 'outlet',
  template: `<div>
    <br/><br/>
    <h2>{{outletHTML}}</h2>
    <br/>
  </div>`,
  styles: ['div { border: 1px dashed; padding: 25px; text-align: center;}']
})
export class OutletComponent {

  outletHTML = '<router-outlet></router-outlet>';
  constructor() {
  }
}
