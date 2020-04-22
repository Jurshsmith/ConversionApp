# CONVERSION APPLICATION <Flexion Coding Challenge>

### To run in production mode
* install docker-compose on your machine
* clone ConversionApp && cd ConversionApp
* run `docker-compose up`
* go to `http://localhost:3000`

### OR

# Frontend
From root folder:
* `cd frontend`
* Add angular cli to your machine : `npm install -g @angular/cli`
### run tests
* For unit test : `npm run test`
* For e2e : `npm run cypress`
### run app in prod mode (ssr)
* To run application in production mode : `npm run build:ssr && npm run serve:ssr`


# Backend
From root folder:
* `cd server`
### run tests
* For both unit & e2e tests: `npm run test`
### start application in prod
* `npm run build`
* `npm run start:prod`

Then,
Go to `http://localhost:4200`

OR 

# Use Command Line Interface
### run command line interface;
From root folder:
* `cd server`
* `npm install && npm run start`
* `npm run command-line`


## To improve on the app

* Enable Caching on the server side
* Documentation of the nest js api
* Documentation of angular application
* Migration of Restful api to graphql 
* Microservice architecture with kubernetes
* Include CI/CD config
* Test command line interface
* Enable an overall http interceptor in angular app for proper network handling
* Include a debounce event handler such that only when user is done typing the request is made

