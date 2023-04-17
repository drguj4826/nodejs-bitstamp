const http = require('http');

const app = require('./app.js');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

async function startServer() {
  
  server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
  });
}

startServer();