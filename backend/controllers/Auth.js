const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');

module.exports.Login = async (req, res) => {
    console.log(req.body);
  //   const { email, password } = req.body;
  // const user = UserModel.find(u => u.email === email);
  // if (!user || !(await bcrypt.compare(password, user.password))) {
  //   return res.status(401).send('Invalid credentials');
}

module.exports.Signup = async (req, res) => {
    console.log(req.body);
}