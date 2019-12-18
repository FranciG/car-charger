const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    //Getting the token
  const token = req.header('x-auth-token');

  // Check for token
  if (!token)
    return res.status(401).json({ msg: 'No token, unathorized' });

  try {
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
      //There is token but not valid
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;