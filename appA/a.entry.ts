import 'core-js/client/shim';
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone';

import { generateMainFunction } from 'a.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



document.addEventListener("DOMContentLoaded", function(event) { 

    const m = (window as any).appA.BModule;

    platformBrowserDynamic().bootstrapModule(generateMainFunction([m]));
});

export * from 'a.service';