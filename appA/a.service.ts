import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AService {

    constructor() {
        console.info("appA.AService.contructor");
    }

    print() {
        console.info('appA.AService.print() called');
    }

}