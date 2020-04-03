/**
 * Cards: The data of the payment method our customer use.
 * 
 * WIP
 */

export default (sequelize, DataTypes) => {
  const Cards = sequelize.define('Cards',
    {
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      paranoid: true,
      underscored: true,
      underscoredAll: true,
    },
  );

  Cards.associate = ({ Payments }) => {
    Cards.hasMany(Payments);
  };

  return Cards;
};
