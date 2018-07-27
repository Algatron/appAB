
import { Injectable, NgModule } from '@angular/core';
import { CompB } from './component';

import { Service } from 'appA';

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