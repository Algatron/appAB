import { OnInit } from "@angular/core";
import { Service } from 'appA';
export declare class CompB implements OnInit {
    private service;
    constructor(service: Service);
    ngOnInit(): void;
}
