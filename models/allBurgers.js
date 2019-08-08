module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
      id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
      },
     burger_name: {
        type: DataTypes.STRING
      },
      devoured:{
          type:DataTypes.BOOLEAN
      }
    },{
        timestamps: false,
        freezeTableName: true,
    });
    return burger;
  };
  