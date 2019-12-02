import { Component } from '@angular/core';

@Component({
    selector: 'login-component',
    template: `<div>
        <h2>Login Component</h2>
      <input type="email" name="email" placeholder="Email"><br/><br/>
      <input type="password" name="password" placeholder="Password"><br/><br/>
      <button type="submit">Login</button>
    </div>`,
    styles: ['div { border: 2px solid; padding: 25px; border-radius: 10px; text-align: center;}']
})
export class LoginComponent {
    constructor() {
    }
}
