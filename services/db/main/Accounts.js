import { ACCOUNT_STATUS } from "../../../helpers/constants";

/**
 * Account: Our customer data.
 */

export default (sequelize, DataTypes) => {
	const Accounts = sequelize.define(
		"Accounts",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			status: {
				type: DataTypes.ENUM,
				values: Object.keys(ACCOUNT_STATUS),
				defaultValue: ACCOUNT_STATUS.INITIALIZED,
				allowNull: false
			}
		},
		{
			paranoid: true,
			underscored: true,
			underscoredAll: true
		}
	);

	Accounts.associate = ({ Plans, Users, Cards }) => {
		Accounts.hasMany(Plans);
		Accounts.hasMany(Users);
		Accounts.hasMany(Cards);
	};

	return Accounts;
};
