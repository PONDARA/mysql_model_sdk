var sequelize = require('./config')
var initModels = require("./models/init-models");
var models = initModels(sequelize);

module.exports={
    models
}