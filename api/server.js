const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server');

const server = jsonServer.create();
const dbPath = 'db.json'; 

console.log(`Looking for db.json at: ${path.resolve(dbPath)}`);
if (!fs.existsSync(dbPath)) {
  console.error(`db.json not found at ${path.resolve(dbPath)}`);
  throw new Error('db.json not found');
}

let router;
try {
  router = jsonServer.router(dbPath);
} catch (error) {
  console.error('Error loading db.json:', error.message);
  throw error;
}

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;