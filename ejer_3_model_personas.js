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
    nombre: 'Maria',
    apellido:'Suarez',
    edad: 35,
    direccion: 'Loria 456' 
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

sequelize.sync()
  .then(() => Cars.create({
    nombre: 'Ana',
    apellido:'Fragata',
    edad: 27,
    direccion: 'Vergara 2568' 
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

sequelize.sync()
  .then(() => Cars.create({
    nombre: 'Adrian',
    apellido:'Perez',
    edad: 30,
    direccion: 'Bradley 340' 
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

sequelize.sync()
  .then(() => Cars.create({
    nombre: 'Elena',
    apellido:'Rodriguez',
    edad: 36,
    direccion: 'Origone 240' 
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

/* Actualizacion */
Cars.update({ nombre: "Paula" }, {
  where: {
    lastName: 'Rodriguez'
  }
}).then(() => {
  console.log("Done");
});

Cars.update({ nombre: "Caren" }, {
  where: {
    lastName: 'Fragata'
  }
}).then(() => {
  console.log("Done");
});









