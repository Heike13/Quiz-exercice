const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');

class Question extends Model {}

Question.init({
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  wiki: {
    type: DataTypes.TEXT,
  },
  anecdote: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  tableName: 'question',
});

module.exports = Question;
