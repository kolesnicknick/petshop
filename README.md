# lms-pno-processor
Google Cloud Function for the LMS Data Processor
The functions works on Pub/Sub Google Cloud event emmitment
The goal of this function is to work as a glue between PNO, Docebo API in dependency to User storage

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
