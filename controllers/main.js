const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  // mongo
  // Joi
  // Check in controller
  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password", 400);
  }

  console.log(username, password);

  res.send("Fake login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, Wisdom`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
