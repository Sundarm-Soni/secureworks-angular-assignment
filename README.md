# SecureworksAngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

Friends form project is used to enter multiple friends and friends of friends using nested Angular reactive friends form. There is a add button which can be used to generate the friend group with age, weight and name fields. Upon submition the data is stored into into NGRX Signal Store and session storage for persisting data on page refresh. Ngrx Signal store provides effected state management solution.

The project consists of usage of D3.js and Ag-grid libraries to show the friends data (name, age, weight) upon submission on display tab.

For unit testing and mocking of components, modules Ng mocks library have been used.

Control flows have been used to optimize performance. And project is build on top of new Angular standalone components and using new ES build based build system which internally uses Vite.

Karam and Jasmine test runner have been replaced with Jest for optimal testing.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
