# My First API

Following this guide: https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2

## 2019_04_19

Created my package.json with
```bash
npm init
```
Using Express as my framework
```bash
npm install --save express mongodb@2.2.16 body-parser
```

Dev dependency 
```bash
npm install --save-dev nodemon
```

## 2019_05_09

Created server.js and started adding required dependencies (Express, MongoDB, body parser)

Added a port and told the server.js to listen for HTTP requests with 

```javascript
const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});
```
```bash
npm run dev
```

or 

```bash
node server.js
```

starts the server. It does nothing right now so I'm going to change that.

i'm going to build routes in order to CREATE, READ, UPDATE and DELETE (CRUD) nodes.

making my app route dirs and files from root >
```bash
mkdir app
cd app
mkdir routes
cd routes
touch index.js
touch note_routes.js
```

BUILDING ROUTES!!

In Express routes are wrapped in a function, which takes express isntance and a database

Exported the function through index.js

imported it in server.js

Created route in note_routes.js

Used Postman to send requests to server

Setup params in postman to send to server

Used body parser to make url enccoded forms readable on its own

Using MongoDB to setup my cluster because mlab was acquired by MongoDB




Questions:
- Should I split up routes into separate files or not?


## 2019_06_26

Stopped because I couldn't figure out mLab. I figured it out in another tutorial.










