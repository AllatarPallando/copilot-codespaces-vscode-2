// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Define a route
// 4. Parse the request body
// 5. Validate the request body
// 6. Create a comment
// 7. Return the created comment
// 8. Listen on a port

// 1. Create a web server
const http = require('http');
const server = http.createServer();

// 2. Create a router
const Router = require('./router');
const router = new Router();

// 3. Define a route
router.post('/comments', (req, res) => {
  // 4. Parse the request body
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    const comment = JSON.parse(body);

    // 5. Validate the request body
    if (!comment.name || !comment.email || !comment.comment) {
      res.statusCode = 400;
      res.end('Bad Request');
      return;
    }

    // 6. Create a comment
    const commentId = Date.now();
    comments[commentId] = comment;

    // 7. Return the created comment
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comment));
  });
});

// 8. Listen on a port
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

// Path: router.js
// Define a router
// 1. Define a Router class
// 2. Define a routes property
// 3. Define a get method
// 4. Define a post method

// 1. Define a Router class
class Router {
  // 2. Define a routes property
  constructor() {
    this.routes = {};
  }

  // 3. Define a get method
  get(path, handler) {
    this.routes[path] = handler;
  }

  // 4. Define a post method
  post(path, handler) {
    this.routes[path] = handler;
  }
}

// Path: server.js
// Create web server
// 1. Create a web server
// 2. Create a router
// 3. Define a