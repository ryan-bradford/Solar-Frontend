import { Component } from '@angular/core';

@Component({
    selector: 'app-homeowner-toolbar',
    templateUrl: './homeowner.toolbar.component.html',
    styleUrls: ['./homeowner.toolbar.component.less']
})
export class HomeownerToolbarComponent {

    email = localStorage.getItem('email');

    constructor() {
    }

}
