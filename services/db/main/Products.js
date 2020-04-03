import { PERIOD_TYPES, PRODUCT_STATUS } from "../../../helpers/constants";

/**
 * Products: List of services/features that we can serve to customers
 */

export default (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      status: {
				type: DataTypes.ENUM,
				values: Object.keys(PRODUCT_STATUS),
				allowNull: false,
				defaultValue: PRODUCT_STATUS.BETAS,
			},
      default_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
      },
      default_period: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      default_period_type: {
        type: DataTypes.ENUM,
        values: Object.keys(PERIOD_TYPES),
        allowNull: false
      }
    },
    {
      paranoid: true,
      underscored: true,
      underscoredAll: true
    }
  );

  Products.associate = ({ Plans }) => {
    Products.belongsToMany(Plans, { through: "plans_products" });
  };

  return Products;
};
