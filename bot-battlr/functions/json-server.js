const jsonServer = require('json-server')
const server = jsonServer.create()
const fs = require('fs')
const path = require('path')

// Load db.json from public folder
const dbPath = path.join(__dirname, '../public/db.json')
const router = jsonServer.router(dbPath)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

exports.handler = async (event, context) => {
  const { httpMethod, path, body } = event
  
  const req = {
    method: httpMethod,
    url: path,
    body: body ? JSON.parse(body) : null
  }
  
  const res = {
    statusCode: 200,
    setHeader: () => {},
    end: (data) => ({
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  
  await server(req, res)
  return router.db.getState().then(state => res.end(state))
}