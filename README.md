![Oquiz](https://github.com/Heike13/Quiz-exercice/assets/157512723/b6dcbe27-3ab5-4bf3-9192-e70916645979)

# How to start ?

Clone this repo then start a terminal into this folder :

```bash
# install dependencies
pnpm install 
npm install
yarn install

# install postgreSQL
pnpm install pg
```

Then :

```bash
# connect to postgres
sudo -i -u postgres psql;

# then create a local database with postgres
CREATE DATABASE dataBaseName OWNER userName;

# then create tables and populate them
pnpm run db:create
pnpm run db:seed 
```

Start server with : 

```bash
pnpm run dev
```
## Install node

<details>
  <summary>Linux</summary>

**Ubuntu :**

```shell
sudo apt install nodejs
```

**For other distribs**, tchek <https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions>

Ou <https://nodejs.org/en/download/package-manager/>

</details>

<details>
  <summary>MacOS</summary>

- Download directly : <https://nodejs.org/en/>

Ou

- [Install homebrew](https://brew.sh/)
- Then node with this command : `brew install node`

</details>

<details>
  <summary>Windows</summary>

- Download directly : <https://nodejs.org/en/>

Ou

- [Installer chocolatey](https://chocolatey.org/)
- Puis node avec la commande `choco install nodejs`

</details>

## Techno used 
- Express Server
- Sequelize ORM
- EJS
- zod
- express-session
- bcrypt
- dotenv
    
## Utils used
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
    
