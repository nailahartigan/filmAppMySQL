const { Sequelize } = require("sequelize") //grabbing sequelize for this app referencing from npm library
require("dotenv").config()                 //require dotenv and config is a method

exports.sequelize = new Sequelize(process.env.MYSQL_URI) //connection method using the URI from clever cloud