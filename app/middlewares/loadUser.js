const { User } = require('../models');

// Give global access to the current user
async function loadUser(req, res, next) {
  try {
    if (req.session.userId) {
      const user = await User.findByPk(req.session.userId);
      if (user) {
        req.user = user;
        res.locals.user = user;
      }
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send('Erreur interne');
  }
}

module.exports = loadUser;
