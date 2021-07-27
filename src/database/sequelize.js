require('dotenv').config()

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect: "postgres",
    host:process.env.HOST,
    username:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
})

async function teste(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
}

teste()

module.exports = sequelize