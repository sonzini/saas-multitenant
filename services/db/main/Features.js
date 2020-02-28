const Features = sequelize.define('Features', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  default_price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  }
}, {
  paranoid: true,
});

Features.belongsToMany(Services, {through: 'ServicesFeatures'})
