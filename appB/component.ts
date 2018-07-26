import { Component, Injectable, OnInit } from "@angular/core";
import { Service } from 'appA';

@Component({
    selector: 'comp-b',
    template: `
        <div style='padding: 20px; border: solid; border-color:black'>BBBBBBBB</div>
    `
})
@Injectable()
export class CompB {

    constructor(private service: Service) {
    }

    ngOnInit() {

        this.service.print();

    }


}