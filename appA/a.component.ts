import { Component, Injectable, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `
        <div style='padding: 20px; border: solid; border-color:black'>Component from appA</div>
        <comp-b></comp-b>
    `
})
@Injectable()
export class AComponent implements OnInit {


    ngOnInit() {
        console.info('appA.AComponent - Root component initialized ');
    }


}