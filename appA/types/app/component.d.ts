import { OnInit } from "@angular/core";
import { Service } from './service';
export declare class Comp implements OnInit {
    private service;
    constructor(service: Service);
    ngOnInit(): void;
}
