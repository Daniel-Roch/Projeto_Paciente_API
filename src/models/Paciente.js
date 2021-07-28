const { DataTypes } = require("sequelize");

const sequelize = require("../database/sequelize");

const Paciente = sequelize.define("Paciente", {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull:false
  },
  nome:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf:{
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nascimento:{
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

module.exports = Paciente;