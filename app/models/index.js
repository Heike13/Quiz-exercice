const Answer = require('./Answer');
const Level = require('./Level');
const Question = require('./Question');
const Quiz = require('./Quiz');
const Tag = require('./Tag');
const User = require('./User');


User.hasMany(Quiz, {
  foreignKey: 'author_id',
  as: 'quizzes',
});

Quiz.belongsTo(User, {
  foreignKey: 'author_id',
  as: 'author',
});

Quiz.hasMany(Question, {
  foreignKey: 'quiz_id',
  as: 'questions', 
});

Question.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  as: 'quiz', 
});

Level.hasMany(Question, {
  foreignKey: 'level_id',
  as: 'questions',
});

Question.belongsTo(Level, {
  foreignKey: 'level_id',
  as: 'level', 
});

Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'answers',
});

Answer.belongsTo(Question, {
  foreignKey: 'question_id',
  as: 'question',
});

Quiz.belongsToMany(Tag, {
  through: 'quiz_has_tag', 
  as: 'tags', 
  foreignKey: 'quiz_id',
  otherKey: 'tag_id',
});

Tag.belongsToMany(Quiz, {
  through: 'quiz_has_tag', 
  as: 'quizzes', 
  foreignKey: 'tag_id',
  otherKey: 'quiz_id',
});

Question.belongsTo(Answer, {
  foreignKey: 'answer_id',
  as: 'good_answer',
});

Answer.hasOne(Question, {
  foreignKey: 'answer_id',
  as: 'targeted_question',
});

module.exports = {
  Answer,
  Level,
  Question,
  Quiz,
  Tag,
  User,
};
