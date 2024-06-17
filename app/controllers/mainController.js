const { Quiz } = require('../models');

const mainController = {
  async index(req, res) {
    try {
      const quizzes = await Quiz.findAll({
        include: [{
          association: 'author',
        }, {
          association: 'tags',
        }],
      });

      res.render('home', {
        quizzes,
      });
    } catch (error) {
      console.trace(error);
      res.status(500).render('500');
    }
  },
};

module.exports = mainController;
