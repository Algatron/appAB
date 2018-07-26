import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Service {

    constructor() {
        console.info("bla");
    }

    print() {
        console.info('test');
    }

}