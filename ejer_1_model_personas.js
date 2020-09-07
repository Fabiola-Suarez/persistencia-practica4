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
  edad: Sequelize.STRING,
  direccion: Sequelize.STRING
}, { sequelize, modelName: 'personas' });


/* insercion*/
sequelize.sync()
  .then(() => Cars.create({
    nombre: 'Rosa',
    apellido:'Dominguez',
    edad: "22",
    direccion: 'Acuña 2035' 
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  
/* actualizacion*/
Cars.update({ nombre: "Claudia" }, {
  where: {
    lastName: 'Dominguez'
  }
}).then(() => {
  console.log("Done");
});




