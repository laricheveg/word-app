
## install requirements
1. install [Node.js/download](https://nodejs.org/en/download/)

2. install [Angular CLI](https://cli.angular.io/)
```
$ npm install -g @angular/cli
```

3. install postgreSQL and setup a database -> [postgreSQL/docs](https://www.postgresql.org/docs/manuals/archive/)

4. edit config files, especially the database connection in there
```
$ cd /<app folder>/config/default.json
```

5. install sequelize CLI, migrate and seed
```
$ npm install -g sequelize-cli

// change to app folder
$ cd /<app folder>

// migrate the tables
$ sequelize db:migrate

// seed default data
$ sequelize db:seed:all
```

## init the app
```
$ npm install --save
```

## run the app
```
// in dev mode (nodemon is involved)
$ npm run dev

// in prod mode
$ npm run prod

After seeds:
    email: 'user@pean-auth-app.com';
    password: user; 
```

## build the app
```
// The build artifacts will be stored in the `dist/` directory
$ ng build

// for a production build 
$ ng build --prod
```
