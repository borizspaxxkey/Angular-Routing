import { Component } from '@angular/core';

@Component({
    selector: "reset-password",
    template:
            `<div>
                <h2>Reset Password Component</h2>
                <input type="email" name="email" placeholder="Email"><br/><br/>
                <button type="submit">Reset</button>
            </div>`,
    styles: ['div { border: 2px solid; padding: 25px; border-radius: 10px; text-align: center;}']
})
export class ResetComponent {
    constructor() {
    }
}
