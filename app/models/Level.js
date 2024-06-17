const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/client-sequelize');

class Level extends Model {}

Level.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'level',
});

module.exports = Level;
