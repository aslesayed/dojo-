const db = require("../config/database");

const findAll = () => {
  return db.query("SELECT * FROM users");
};

const findOneById = (id) => {
  return db.query("SELECT * FROM users WHERE id=?", [id]);
};

module.exports = { findAll, findOneById };
