const express = require('express');
const bodyParser = require('body-parser')
const app = express(); //makes it so the varibale 'app' references the express server.
const MongoClient = require('mongodb').MongoClient;
var db;
var databaseUrl = 'mongodb+srv://admin2:stinkydif@myfirstapi-voqb6.mongodb.net/test?retryWrites=true&w=majority'

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs') //allows use of embedded js template engine.


//establishes the connection to the MongoDB i have setup.
MongoClient.connect(databaseUrl, (err, client) => {
	if (err) return console.log(err)
	db = client.db('myFirstApi')
	app.listen(3001, () => {
		console.log('listening on 3001')
	})
})

//When the html form is submitted it sends the results to the database and reports to the console that it was saved.
app.post('/quotes', (req, res) =>{
	db.collection('quotes').save(req.body, (err,result) => {
		if (err) return console.log(err)
		console.log('saved to database')
		res.redirect('/')
	})
})

//Grabs all of the quotes from the database and sends them to the index.ejs file and sends the file to the webiste.
app.get('/', (req, res) => {
	db.collection('quotes').find().toArray((err,result) => {
		if (err) return console.log(err)
			//below renders the index.ejs file
		res.render('index.ejs', {quotes:result})
	})
})

/*
//Logs something to the console
console.log('Node and server is working!')
*/

/*
//Creates the express server  and sets the port.
app.listen(3001, function() {
  console.log('listening on 3001')
})
*/


/*
//sends the 'req' to the console which in this case is the quotes made
app.post('/quotes', (req, res) => {
  console.log(req.body)
})
*/

/*
//sends 'index.html' as the response to the website
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})
*/

/*
//sends the string 'Helloooo!' to the console after a post is made
app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})*/