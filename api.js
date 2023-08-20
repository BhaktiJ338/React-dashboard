const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 5000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
