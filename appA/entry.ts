import 'core-js/client/shim';
import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone';

import { Main } from './main';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


document.addEventListener("DOMContentLoaded", function(event) { 
    platformBrowserDynamic().bootstrapModule(Main);
});

export * from './service';