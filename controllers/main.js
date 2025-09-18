// jwt import
const jwt = require("jsonwebtoken");
//custom error import
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongoose validations
  // Joi
  // Check in controller
  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  // id just for demo, normally provided by DB!!!
  // just for demo, use complex and unguessable strings values in production!!!
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const { username } = req.user;

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
