/**
 * Created by Greg on 4/25/2017.
 */
import { Component } from "@angular/core";

@Component({
    selector: "items-list",
    template: `<div>
        <h2>Items List Component</h2>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    </div>`,
    styles: ['div { border: 2px solid; padding: 25px; border-radius: 10px; text-align: left;}']
})
export class ItemsListComponent {
    constructor() {
    }
}
