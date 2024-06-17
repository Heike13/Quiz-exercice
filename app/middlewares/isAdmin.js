function isAdmin(req, res, next) {

  if (req.user?.role !== 'admin') {
    res.redirect('/');
  } else {
    next();
  }
}

module.exports = isAdmin;
