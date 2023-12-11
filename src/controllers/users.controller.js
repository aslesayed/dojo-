const { findAll, findOneById } = require("../models/users.model");

const getAll = async ({ res }) => {
  try {
    const [users] = await findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json("erreur serveur...");
  }
};

const getOneById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[user]] = await findOneById(id);

    if (user) res.status(200).json(user);
    else res.sendStatus(404);
  } catch (error) {
    console.error(error);
    res.status(500).json("erreur serveur...");
  }
};

module.exports = { getAll, getOneById };
