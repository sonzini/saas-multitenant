export default (sequelize, DataTypes) => {
  const Features = sequelize.define('Features',
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

  Features.associate = ({ Services }) => {
    Features.belongsToMany(Services, { through: 'services_features' });
  };

  return Features;
};
