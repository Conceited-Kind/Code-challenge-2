const path = require('path');
  const fs = require('fs');
  const jsonServer = require('json-server');
  const server = jsonServer.create();
  const dbPath = path.join(__dirname, 'db.json');

  console.log(`Looking for db.json at: ${dbPath}`);
  if (!fs.existsSync(dbPath)) {
    console.error(`db.json not found at ${dbPath}`);
    throw new Error('db.json not found');
  }

  const router = jsonServer.router(dbPath);
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  module.exports = server;