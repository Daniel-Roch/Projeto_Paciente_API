const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('postgres://rjxtzjtzxsruel:572fbbc3ca4622a36be2ba3ebb30ce35216217b3362d047f230dc00decba11b7@ec2-34-204-128-77.compute-1.amazonaws.com:5432/d96tkopo0kgsja')

module.exports = sequelize