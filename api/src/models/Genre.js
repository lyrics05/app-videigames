const {DataTypes}= require("sequelize")

module.exports=function(sequelize){
    sequelize.define("genre",{
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,

        }
    })
}
