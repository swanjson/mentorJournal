const express = require('express'); //loads in the server
const bodyParser = require('body-parser'); //if JSON data is sent then it is parsed as a JSON file
const { randomBytes } = require('crypto'); //loads in crypto package to allow random bytes

const app = express(); //defines the server as app
app.use(bodyParser.json()); //initiates the body parser

const posts = {}; // array of posts made.

//not hooked up to data base and everything will be stored in memory. that's okay for now.
// this will retreive all the posts made in the above.
app.get('/posts', (req, res) => {
    res.send(posts); //if get request is made then send posts
});

//this will create posts
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex'); // randomly generates id for posts (5 hexidecimal characters)  worry about unique? no probability is low
    const { title } = req.body; // get access to title that user just sent.

    //adds id and title to post based on random id
    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]); //response manual status 201 which means resource was created. sends back post just created.
});

app.listen(4000, () => {
    console.log('Listening on port 4000...');
});

