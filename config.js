const { Sequelize, DataTypes } = require('sequelize');
const SequelizeAuto = require('sequelize-auto');
require ('dotenv').config()

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER
  });

// generate init model usning sequelize_auto
const options = { caseFile: 'l', caseModel: 'o', caseProp: 'c', directory: './models',};
const auto = new SequelizeAuto(sequelize, null, null, options);
auto.run();

module.exports={
    sequelize
}