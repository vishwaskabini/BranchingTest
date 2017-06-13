(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      rdapp: 'dist',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      "ng-sidebar": "npm:ng-sidebar",
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'moment': 'npm:moment/moment.js',
      'ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ngx-bootstrap.umd.js',
      "angular2-datatable": 'npm:angular2-datatable',
      'lodash': 'npm:lodash/lodash.js'
    },
    packages: {
      rdapp: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'ng-sidebar': {
        main: 'lib/index',
        defaultExtension: 'js'
      },
      'angular2-datatable': {
        main: 'index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);