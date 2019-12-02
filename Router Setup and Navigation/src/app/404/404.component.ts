import { Component } from '@angular/core';

@Component({
  selector: "not-found-component",
  template:
    `<div>
    <br/><br/>
                <h2>404: No such page.</h2>
                <h2>Not Found.</h2>
    <br/>
            </div>`,
  styles: ['div { border: 2px solid; padding: 25px; border-radius: 10px; text-align: center;}']
})
export class NotFoundComponent {
  constructor() {
  }
}
