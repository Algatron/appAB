
import { Injectable, NgModule } from '@angular/core';
import {Service} from "appA";
import { CompB } from './component';

const x = new Service();

@NgModule({
    declarations: [
        CompB
    ],
    providers: [
        Service
    ]
})
@Injectable()
export class Child {}