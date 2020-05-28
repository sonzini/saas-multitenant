/**
 * Cards: The data of the payment method our customer use.
 *
 * WIP
 */

export default (sequelize, DataTypes) => {
  const Cards = sequelize.define(
    'Cards',
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

  Cards.associate = ({ Payments, Accounts }) => {
    Cards.hasMany(Payments);

    Cards.belongsTo(Accounts, {
      as: 'account',
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
  };

  return Cards;
};
