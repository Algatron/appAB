
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Service } from './service';
import { Comp } from './component';

@NgModule({
    declarations: [
        Comp
    ],
    imports: [
        //
        BrowserModule
    ],
    providers: [
        Service
    ],
    bootstrap: [
        Comp
    ]
})
@Injectable()
export class Main {}