// main entry point
import { platformBrowserDynamic }            from '@angular/platform-browser-dynamic';
import { AppModule } from './app.modules';

// Extend Observable throughout the app
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

platformBrowserDynamic().bootstrapModule(AppModule);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/