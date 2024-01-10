import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
// import 'zone.js/dist/proxy': import 'zone.js/dist/sync-test&quot;:
import 'zone.js/dist/async-test'; 
import 'zone.js/dist/fake-async-test'; 
import 'zone.js/dist/zone-testing'; 
import 'jest-preset-angular';
import { getTestBed } from '@angular/core/testing';
import {
BrowserDynamicTestingModule, platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
declare const require: {

context(path: string, deep?: boolean, filter?: RegExp): { 
    keys(): string[];

<T>(id: string): T;
}
}
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
BrowserDynamicTestingModule,
platformBrowserDynamicTesting()
);


// // Then we find all the tests.
// const context = require.context(&quot;./', true, /\.spec\.ts$/); // // And load the modules.
// context.keys().map(context);