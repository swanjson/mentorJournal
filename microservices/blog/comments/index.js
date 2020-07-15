const express = require('express'); //loads in the server
const bodyParser = require('body-parser'); //if JSON data is sent then it is parsed as a JSON file
const { randomBytes } = require('crypto'); //loads in crypto package to allow random bytes

const app = express(); //defines the server as app
app.use(bodyParser.json()); //initiates the body parser (middleware?)

const commentsByPostId = {}; // array of comments made.

//not hooked up to data base and everything will be stored in memory. that's okay for now.
// this will retreive all the posts made in the above.
app.get('/posts/:id/comments', (req, res) => { //ROUTE HANDLER
    res.send(commentsByPostId[req.params.id] || []); //if get request is made then send posts
});

//this will create posts
app.post('/posts/:id/comments', (req, res) => { //ROUTE HANDLER
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body; // get access to title that user just sent.

    const comments = commentsByPostId[req.params.id] || []; // if comments returns undf then return empty array
    
    comments.push({ id: commentId, content });

    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments); //response manual status 201 which means resource was created. sends back post just created.
});

app.listen(4001, () => {
    console.log('Listening on port 4001...');
});

