# HYC - Spring Start Frontend

This is frontend part of the application presented on Hack your career lecture on 23.10.2018.
Please note that it will not work on it's own unless [backend](https://github.com/HackYourCareer/201810-spring-start-backend) or [mock server](https://github.com/typicode/json-server) is provided. 

## What it does

It is a simple CRUD application to manage a Beer entity with some validation. 

## Getting started

First of all you need to install LTS version of [Node.js](nodejs.org) along with npm.
You can check whether it works by opening terminal and using following two commands `node -v` and `npm -v`, the output should be something like v8.12.0 and 6.4.1.

Next you need to install [Angular CLI](https://cli.angular.io/), once everything is installed, open terminal in the root forder of the repository and run `npm install`.
After completion run `ng serve` to start development server which is available under `http://localhost:4200` by default.

To modify URL of a backend open `src/environments/environment.ts` file and change `backendUrl` property.

```
export const environment = {
  backendUrl: "http://localhost:3000"
};
```

## Mock server

To test this server use `json-server` npm package. You can find more information on project [Github page](https://github.com/typicode/json-server).
Example of a mock database is provided in `db.json` file.
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

