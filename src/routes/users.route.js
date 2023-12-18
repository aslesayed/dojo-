const router = require("express").Router();
const { getAll, getOneById, postUsers } = require("../controllers/users.controller");
server.use(express.json());

router.get("/users", getAll);
router.get("/users/:id", getOneById);
router.get("/users", postUsers);





module.exports = router;
