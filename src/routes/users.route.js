const router = require("express").Router();
const { getAll, getOneById } = require("../controllers/users.controller");

router.get("/users", getAll);
router.get("/users/:id", getOneById);

module.exports = router;
