import { Component, Injectable, OnInit } from "@angular/core";
import { Service } from './service';

@Component({
    selector: 'app-root',
    template: `
        <div style='padding: 20px; border: solid; border-color:black'>Component</div>
    `
})
@Injectable()
export class Comp implements OnInit {

    constructor(private service: Service) {
    }

    ngOnInit() {

        console.info(this.service);

    }


}