const server = require("./src/config/server");
require("dotenv").config();

const { APP_PORT } = process.env;

server.listen(APP_PORT, () => {
  console.info("server started on port localhost:" + APP_PORT);
});
