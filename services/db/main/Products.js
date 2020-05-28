import { PERIOD_TYPES, PRODUCT_STATUS } from '../../../helpers/constants';

/**
 * Products: List of services/features to populate plans
 */

export default (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      default_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      paranoid: true,
      underscored: true,
      underscoredAll: true,
    },
  );

  Products.associate = ({ Plans }) => {
    Products.belongsToMany(Plans, { through: 'plans_products', as: 'plans' });
  };

  return Products;
};
