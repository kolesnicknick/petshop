## Petshop full stack application
Petshop where you can post pet you want to sell, buy pet, user management, roles management(seller/buyer/admin).
- Backend: Express
- FrontEnd: Vanilla JS(react-like).
## Patterns used:
- FrontEnd: Observer(Pub/Sub), Builder, Singleton, State pattern, Router, MVC
- Backend: Builder, Singleton, Module pattern

## System Requirement
- NodeJS 10+
- NPM
- Postgres

## Setup

After cloning this repository, follow the steps below:

#### Install Dependencies
```shell
//start your postgresql server
npm install
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all    
npm start
//Open new terminal window
cd ..
git clone https://github.com/kolesnicknick/petshop-ui
cd petshop-ui
npm install
npm start
```
After that actions successfuly passed open http://127.0.0.1:54322/ 
And you will come to the petshop front end

#### Setup environment variables
- Add these env vars with valid values
