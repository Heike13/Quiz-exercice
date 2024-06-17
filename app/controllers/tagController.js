const { Tag } = require('../models');

const tagController = {
  async list(req, res) {
    try {
      const tags = await Tag.findAll({
        order: [
          ['name', 'ASC'],
          ['quizzes', 'title', 'ASC'],
        ],
        include: [{
          association: 'quizzes',
        }],
      });
      res.render('tags', {
        tags,
      });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = tagController;
