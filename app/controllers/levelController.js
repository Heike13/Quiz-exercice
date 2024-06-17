const { Level } = require('../models');

const levelController = {
  async list(req, res) {
    const levels = await Level.findAll();
    res.render('levels', {
      levels,
    });
  },

  async create(req, res) {
    try {
      await Level.create({
        name: req.body.name,
      });
      res.redirect('/levels');
    } catch (error) {
      console.trace(error);
      res.status(500).send('Une erreur est survenue');
    }
  },
};

module.exports = levelController;
