#Backend for rackBuilder 

Questions/Todo:
- need to find a way to pass private keys from another file.
- ejs is a template engine but react is a js library for building UIs. They both allow dynamic html writing via hybrid code?

used this tutorial: https://zellwk.com/blog/crud-express-mongodb/
  - creates express server
  - learnt to execute CREATE and READ operations
  - learnt to save and read from MongoDB
  - learnt to use a template engine like Embedded JS


setup:
```bash
npm init
touch server.js
npm install express --save
```
edit server.js to require express and listen on a port. listen is provided by express
```javascript
const express = require('express');
const app = express();

app.listen(3001, function() {
  console.log('listening on 3001')
})
```


Old format:
```javascript
app.get('/', function(req, res){
	res.send('Hello World')
})

```


ES6 (new js update) format:
```javascript
app.get('/', (req, res) => {
	res.send('Hello World')
})
```

send file is a part of the 'res' object. This is express handling a GET Request (READ operation).
```javascript
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

```

Installing nodemon to restart the server after the file is saved. we’re using a --save-dev flag here is because we’re only using Nodemon when we’re developing. This flag would save Nodemon as a devDependency in your package.json file.
```bash
npm install nodemon --save-dev
```

added below to package.json so I can run `npm run dev` from the command line to start the refreshing server instead of running `nodemon server.js` from the node_modules folder because it isn't installed globally
```JSON
"scripts": {
    "dev": "nodemon server.js"
  }
```

Now the create method. CREATE is performed by browser if a post request is sent to the server. This is made with javascript or an html `<form>` element. Form must have an action, a methos, and name attributes.
- action: tells the browser where to navigate to in our Express app (in this case quotes)
- method: tells the browser what request to send. (POST request)

on our server we can handle POST reuqests with a `post` method provided by Express.


```html
<form action="/quotes" method="POST">
  <input type="text" placeholder="name" name="name">
  <input type="text" placeholder="quote" name="quote">
  <button type="submit">Submit</button>
</form>
```
```javascript
app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
```

Express can't handle reading data from the form element on it's own so we add the body-parser
```bash
npm install body-parser --save
```

we can use the body parser with the express `use` function. the `urlencoded` method tells the body-parser to extract data from the `<form>` element and adds them to the body property in the `request` object.
```javascript
app.use(bodyParser.urlencoded({extended: true}))
````

Installing MongoDB
```bash
npm install mongodb --save
```


Now i need to establish the database connection and then establish the connection to the server when the database is connected.

My server URL
`mongodb+srv://admin:<password>@myfirstapi-voqb6.mongodb.net/test?retryWrites=true&w=majority`

```javascript
const MongoClient = require('mongodb').MongoClient;
var databaseUrl = 'link-to-database';

MongoClient.connect(databaseUrl, (err, client) => {
  if (err) return console.log(err)
  db = client.db('myFirstApi')
  app.listen(3001, () => {
    console.log('listening on 3001')
  })
})
```

Now time to display the quotes to the website, but html text can't be fed dynamically so we'll have to do it a different way. We're going to use a template engine to display the informations. This specific one is going to be Embedded JavaScript (ejs)

These are the attempts to serve up the quotes:
```javascript
app.get('/', (req, res) => {
  var cursor = db.collection('quotes').find()
})

db.collection('quotes').find().toArray(function(err, results) {
  console.log(results)
  // send HTML file populated with quotes here
})
```

with ejs you can write JS code within `<%` and `%>` tags. Also output JS code if you use the `<%=` and `%>` tags.
```ejs
<ul class="quotes">
  <% for(var i=0; i<quotes.length; i++) {%>
    <li class="quote">
      <span><%= quotes[i].name %></span>
      <span><%= quotes[i].quote %></span>
    </li>
  <% } %>
</ul>

```

Now we must also copy the form element from `index.html`. The new 'index.ejs' file:
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BACKEND HOMIE!!!</title>
</head>
<body>
  This is the index HTML file! with posts.

  <ul class="quotes">
  <% for(var i=0; i<quotes.length; i++) {%>
    <li class="quote">
      <span><%= quotes[i].name %></span>
      <span><%= quotes[i].quote %></span>
    </li>
  <% } %>
</ul>

 <form action="/quotes" method="POST">
  <input type="text" placeholder="name" name="name">
  <input type="text" placeholder="quote" name="quote">
  <button type="submit">Submit</button>
</form>
</body>
</html>
```






```javascript


```

