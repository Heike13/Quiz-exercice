const { z } = require('zod');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const authController = {
  signupPage(req, res) {
    res.render('signup');
  },
  async signupAction(req, res) {
    const schema = z.object({
      firstname: z.string().nullish(),
      lastname: z.string().nullish(),
      email: z.string().email(),
      password: z.string().min(8),
      confirmation: z.string().min(8),
    });

    const resultValidation = schema.safeParse(req.body);

    if (!resultValidation.success) {
      res.status(400).send(resultValidation.error);
      return;
    }

    if (resultValidation.data.password !== resultValidation.data.confirmation) {
      res.status(400).send('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const userWithSameEmail = await User.findOne({
        where: {
          email: resultValidation.data.email,
        },
      });

      if (userWithSameEmail) {
        res.redirect('/login');
        return;
      }

      const passwordHash = await bcrypt.hash(resultValidation.data.password, 10);

      await User.create({
        firstname: resultValidation.data.firstname,
        lastname: resultValidation.data.lastname,
        email: resultValidation.data.email,
        password: passwordHash,
      });

      res.redirect('/login');
    } catch (err) {
      res.status(500).send('Erreur serveur');
    }
  },

  loginPage(req, res) {
    res.render('login');
  },

  async loginAction(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        res.status(401).send('Mauvais identifiants');
        return;
      }

      const passwordIsValid = await bcrypt.compare(
        req.body.password,
        user.password,
      );

      if (!passwordIsValid) {
        res.status(401).send('Mauvais identifiants');
        return;
      }

      req.session.userId = user.id;

      res.redirect('/');
    } catch (err) {
      res.status(500).send('Erreur serveur');
    }
  },

  logout(req, res) {
    req.session.destroy();
    res.redirect('/');
  },
};

module.exports = authController;
