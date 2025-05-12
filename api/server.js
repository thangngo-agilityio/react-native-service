const jsonServer = require("json-server");
const jsonServerAuth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);

const rules = jsonServerAuth.rewriter({
  users: 600,
  playlist: 644,
});

server.db = router.db;
server.use(rules);
server.use(jsonServerAuth);
server.use(router);

server.listen(port);

module.exports = server;
