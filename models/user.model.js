
module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_image: DataTypes.STRING,
    total_orders: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    // created_at: {
    //   type: DataTypes.DATE,
    //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    // },
    // last_logged_in: {
    //   type: DataTypes.DATE,
    // },
  });

  return User;
}
