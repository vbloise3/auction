/**
 * Created by vincebloise on 12/22/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>Hello {{ name }}!</h1>`
})
export default class AppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2!';
    }
}