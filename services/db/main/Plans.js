import { PLAN_TYPES, PLAN_STATUS, PERIOD_TYPES } from "../../../helpers/constants";

/**
 * Plans: The thing (service) that our clients are paying for.
 * This consist in a list of products we serve, in a specific period at an specific price
 */

export default (sequelize, DataTypes) => {
  const Plans = sequelize.define(
    "Plans",
    {
      type: {
        type: DataTypes.ENUM,
        values: Object.keys(PLAN_TYPES),
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM,
        values: Object.keys(PLAN_STATUS),
        allowNull: false,
        defaultValue: PLAN_STATUS.INITIALIZED
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
      },
      start_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      finish_at: {
        type: DataTypes.DATE
      },
      period: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      period_type: {
        type: DataTypes.ENUM,
        values: Object.keys(PERIOD_TYPES),
        allowNull: false
      }
    },
    {
      underscored: true,
      underscoredAll: true,
      paranoid: true
    }
  );

  Plans.associate = ({ Products, Payments, Accounts }) => {
    Plans.belongsToMany(Products, { through: "plans_products", as: "products" });
    Plans.hasMany(Payments);

    Plans.belongsTo(Accounts, { as: "account" });
  };

  Plans.initScopes = () => {
    Plans.addScope("view", {
      include: ["products", "account"]
    });
  };

  Plans.prototype.removeProducts = function(products, { transaction } = {}) {
    return Promise.all(products.map(p => this.removeProduct(p, { transaction })));
  };

  return Plans;
};
