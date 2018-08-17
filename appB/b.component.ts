import { Component, Injectable, OnInit } from "@angular/core";

@Component({
    selector: 'comp-b',
    template: `
        <div style='padding: 20px; border: dashed; border-color:black'>Component from appB</div>
    `
})
@Injectable()
export class BComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.info('appB.BComponent initializing');
    }

}