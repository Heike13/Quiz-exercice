const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');

class Quiz extends Model {}

Quiz.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  tableName: 'quiz',
});

module.exports = Quiz;
