# basic-nestjs-setting-template

# Config

-   husky
-   lint-staged
-   folder tree
-   .env(local, development, production)
-   class-validator
-   ResponseInterceptor
-   Typeorm
-   mysql

# Command

-   npm run start:{ local | dev | prod }

# Convert an already created table into entity code

install

```
npm i -g typeorm-model-generator
yarn add typeorm-model-generator
```

```
command is as follows.

-h : host

-d : database name

-p : port

-u : db username

-x : db password

-e : engine (mssql, postgres, mysql, mariadb, oracle, sqlite)

-o : folder path to create file
```
