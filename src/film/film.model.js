const { sequelize } = require("../db/connection")       //pulling sequelize connection from connection.js
const { DataTypes } = require("sequelize")              //working with a specific datatype

const Film = sequelize.define("Film", {  // creating a variable and using sequelize for SQL
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
    like: {
        type: DataTypes.STRING,
        defaultValue: "good",
    }
})

module.exports = Film