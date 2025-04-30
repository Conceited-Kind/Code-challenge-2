const jsonServer = require('json-server');
const fs = require('fs');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

console.log('Starting JSON Server...');
if (!fs.existsSync('db.json')) {
  console.error('Error: db.json not found in the root directory!');
  process.exit(1);
}

server.use(middlewares);
server.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use('/bots', router); // Serve bots data at /bots

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/bots`);
});