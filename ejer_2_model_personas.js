const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', {
  host: 'localhost',
  dialect: 'mariadb' 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Cars extends Sequelize.Model {}
Cars.init({
  nombre: Sequelize.STRING,
  apellido:Sequelize.STRING,
  edad: Sequelize.INTEGER,
  direccion: Sequelize.STRING
}, { sequelize, modelName: 'personas' });


/* insercion*/
sequelize.sync()
  .then(() => Cars.create({
    nombre: 'Pedro',
    apellido:'Gomez',
    edad: 25,
    direccion: 'Bonorino 120' 
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

/* eliminacion*/

User.destroy({
  where: {
    id: 1
  }
}).then(() => {
  console.log("Elimine Registro");
});








