
import { Injectable, NgModule, APP_INITIALIZER } from '@angular/core';
import { BComponent } from './b.component';
import { BService } from './b.service';
import { AService } from 'appA';


const fac1 = function() {
    return () => console.info('appB.BModule initializer');
};

const fac2 = function(service: AService) {
    return () => {
        console.info('appB.BModule - calling print on service from module A...');
        service.print();
    };
};

@NgModule({
    declarations: [
        BComponent
    ],
    exports: [
        BComponent
    ],
    providers: [
        BService,
        AService,
        {
            provide: APP_INITIALIZER,
            useFactory: fac1,
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: fac2,
            deps: [
                AService
            ],
            multi: true
        }
    ]
})
export class BModule {}