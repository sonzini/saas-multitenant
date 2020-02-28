const Cards = sequelize.define('Cards', {
  token: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  paranoid: true,
});

Cards.hasMany(Payments)
Cards.belongsTo(Accounts)