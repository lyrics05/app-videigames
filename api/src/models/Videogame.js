const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.CHAR(36),
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type:DataTypes.STRING,
      allowNull:false
    },
    released:{
      type:DataTypes.STRING,

    },
    rating:{
     type:DataTypes.DECIMAL
    },
    platforms:{
      type: DataTypes.JSON, 
      allowNull:false,
      defaultValue: []
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    }
  });
};
