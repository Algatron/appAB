import 'core-js/client/shim';
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone';

import { Main } from './main';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



document.addEventListener("DOMContentLoaded", function(event) { 

    // import(/*  webpackMode: "async" */ "../appB/dist/appB").then((mod: any) => {
    // import(/*  webpackMode: "weak", webpackChunkName: "vendor" */ "@angular/core").then((mod: any) => {
        // console.info(mod);
    // });

    platformBrowserDynamic().bootstrapModule(Main);
});

export * from './service';