<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Create a task module

nest g module tasks - command to create a new module named tasks

CREATE src/tasks/tasks.module.ts (82 bytes)
UPDATE src/app.module.ts (312 bytes)

## Create a new controller
#Responsible for handling incoming request and responses
#Bound for specific path example /tasks for task
#Contains handlers, which handles endpoints and request methods
(GET, POST, DELETE, etc)
#Can take advantage of dependency injection to consume providers within the same module
#HANDLERS are simply methods within controller class @Get, @Post, @Delete etc,

nest g controller tasks - to create a new controller named tasks

## NestJS Providers
#Can be Injected into constructors if decorated as @Injectible, via dependency injection
#Providers must be provided to a module for them to be usable
#Can be exported from a module - and then be available to other modules that imported it.

## Services
#Implemented as providers, Not all providers are services
#Common concept within software development and are not exclusive only to NestJS, JS or backend development
#Singleton, same instance or single instance will be shared across the application, acting as a single source of truth.
#The main source of business logic. For example a service will be called from a controller
to validate the data, create an item in the database and return a response.


## Creating a service

nest g service tasks --no-spec
CREATE src/tasks/tasks.service.ts (89 bytes)
UPDATE src/tasks/tasks.module.ts (247 bytes)

## Model
Can be defined as a Class or an Interface
An interface is a typescript concept that forces that form of an object during compilation. Object will be destroyed after compilation.
Classes on the other hand are preserved.

## Data Transfer Object (DTO)

User > sent http request(POST: Tasks) > TaskController.createTask() > TaskService.CreateTask() > Send HTTP Response to the User

-Common concept in software development not specific to NestJS
-DTO is not a model definition. It defines the shape of data for specific case.
-A DTO is an object used to encapsulate data, and send it from one subsystem of an application to another.
-Can be useful for data validation
-used for retrieval,storage, serialization and deserialization of data
-Can be defined as an interface or a class.
-Recommended approach is to use classes.
-DTOs are not mandatory
-But applying DTO pattern as soon as possible will make it easy for you to maintain and
refactor your code.


## Validation and Error Handling - NestJS Pipes
-Pipes operates on the arguments to be processed by the route handler, just before the handler is called
-Pipes can perform data transformation or data validation
-Pipes can throw exceptions. Exceptions thrown will be handled by NestJS and parsed into an error response.
-pipe must have a transform() method. This method will be called by NestJS to process the arguments.
-transform() accepts 2 parameters: value and metadata(optional)
-Validators() will also handle the errors

## Object Relational Mapping (ORM) and TypeORM
-ORM is a technique that lets you query and manipulate data from a database using an object oriented paradigm.
-Writing the data model in one place - easier to maintain. Less repitition
-TypeORm is an ORM lib that can run in Node.Js and be used with typescript or JS
-TypeORM help us define and manage entities, repositories, columns, relations,replication, indices, queries etc.


## Modules
-For root module which is app.module.ts we use forRoot
-For sub-module we use forFeature.




