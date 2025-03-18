// Create web server
// npm install express
// npm install body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse the body of the request
app.use(bodyParser.json());

// Create a list of comments
let comments = [];

// Add a comment to the list
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.send('Comment added');
});

// Get the list of comments
app.get('/comment', (req, res) => {
  res.send(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});