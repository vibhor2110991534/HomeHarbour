const http = require("http");
const app = require("./config/app");
const { mongoConnect } = require("./config/database");
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();