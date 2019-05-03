let modelName = 'Word';
module.exports = function(sequelize, DataTypes) {
  let model = sequelize.define(modelName, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    userId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    count: {
      type: DataTypes.INTEGER
    },
  });
  return model;
};