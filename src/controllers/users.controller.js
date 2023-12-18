const { findAll, findOneById } = require("../models/users.model");

const postUsers = async(req, res) =>{
  try {
    const { username, email, password } = req.body;
     const [result] = await database.query("INSERT INTO movies(username, email, password ) VALUES (?, ?, ?, ?, ?)",
     [username, email, password ]
     );
     res.status(201).send({ id: result.insertId });
     } catch (error) {
      console.error(error);
      res.status(500).json("Server error...");
    }
};

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

module.exports = { getAll, getOneById, postUsers };
