
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AService } from 'a.service';
import { AComponent } from 'a.component';


export function generateMainFunction(modules: any[]): any {
    @NgModule({
        declarations: [
            AComponent,
        ],
        imports: [
            BrowserModule,
            ...modules
        ],
        providers: [
            AService
        ],
        bootstrap: [
            AComponent
        ],
        entryComponents: [
            ...modules[0].__annotations__[0].declarations
        ]
    })
    @Injectable()
    class AModule {}

    return AModule;
}

