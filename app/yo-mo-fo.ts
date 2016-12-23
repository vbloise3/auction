/**
 * Created by vincebloise on 12/22/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'yo-mo-fo',
    template: `<h2>Yo {{ name }}!</h2>`
})
export default class AppComponent {
    name: string;

    constructor() {
        this.name = 'Mo fo ku!';
    }
}