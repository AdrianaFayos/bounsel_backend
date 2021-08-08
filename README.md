<h1 align="center">
  <br>BOUNSEL RECORD SYSTEM
</h1>





## Instructions 🔧

The first step is to clone the repository and install the project dependencies in your local repository.

### `npm i`

Initializate the Sequelize dependency and fill in the password and database fields in the config.json file.

### `sequelize init`

Migrate the models to the local database.

### `sequelize db:migrate`

Run the server.

### `npm start`

Finally, enter the endpoints petitions in Postman and send them.

<a href="https://www.postman.com/"><img src="img/runpostman.png" width="150"></a>


## Models relation

The relation between users and orders models is 1 to many (1:n).

<img src="img/relation.png" width="1500">


## Used technologies

<img src="img/javascript.png" width="53"> <img src="img/node.png" width="65"> <img src="img/postman.png" width="50"> <img src="img/sequelize.png" width="50">

Installed dependencies: Express, Axios, MySQL2, Sequelize, Sequelize-cli, Bcrypt and Jsonwebtoken.


## Developer ✍️

[Adriana Fayos](https://github.com/AdrianaFayos)

---