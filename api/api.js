const jsonServer = require('json-server');
const cors = require('cors')
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();

const port = 5000;

server.use(middlewares);
server.use(router);
server.use(cors({
  credentials:true,
  origin:'https://react-dashboard-bhaktij338.vercel.app/'
}));

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
