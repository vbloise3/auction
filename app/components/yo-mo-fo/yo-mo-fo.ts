/**
 * Created by vincebloise on 12/22/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'yo-mo-fo',
    templateUrl: 'app/components/yo-mo-fo/yo-mo-fo.html'
})
export default class AppComponent {
    name: string;

    constructor() {
        this.name = 'mu oo fu ku!';
    }
}