const { Quiz } = require('../models');

const quizController = {
  async detail(req, res) {
    try {

      const quiz = await Quiz.findByPk(req.params.id, {
        include: [{
          association: 'author',
        }, {
          association: 'tags',
        }, {
          association: 'questions',

          include: [{
            association: 'answers',
          }, {
            association: 'level',
          }],
        }],
      });
      res.render('quiz', {
        quiz,
      });
    } catch (error) {
      console.trace(error);
      res.status(500).render('500');
    }
  },
};

module.exports = quizController;
