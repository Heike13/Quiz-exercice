const { Router } = require('express');
const mainController = require('./controllers/mainController');
const levelController = require('./controllers/levelController');
const tagController = require('./controllers/tagController');
const quizController = require('./controllers/quizController');
const authController = require('./controllers/authController');
const isAuthed = require('./middlewares/isAuthed');
const isAdmin = require('./middlewares/isAdmin');

const router = Router();

router.get('/', mainController.index);
router.get('/levels', isAdmin, levelController.list);
router.post('/levels', isAdmin, levelController.create);

router.get('/tags', tagController.list);
router.get('/quiz/:id', isAuthed, quizController.detail);

router.get('/signup', authController.signupPage);
router.post('/signup', authController.signupAction);
router.get('/login', authController.loginPage);
router.post('/login', authController.loginAction);
router.get('/logout', authController.logout);

module.exports = router;
