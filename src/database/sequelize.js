require('dotenv').config()

const { Sequelize } = require("sequelize");

const conect = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
  }
});

//check connection (optional)
conect
  .authenticate()
  .then(() =>{
    console.log("Connection sucess.")
  })
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = conect