export const declareModelUser = (sequelize, type) => {
	return sequelize.define('User', {
		id: {
			type: type.INTEGER,
			autoIncrement: true,
			unique: true,
			primaryKey: true,
		},
		firstName: {
			type: type.STRING,
			allowNull: false,
		},
		lastName: {
			type: type.STRING,
			allowNull: false,
		},
		password: {
			type: type.STRING,
			allowNull: false,
		},
		email: {
			type: type.STRING,
			allowNull: false,
			unique: true,
		},
		active: {
			type: type.BOOLEAN,
			allowNull: false,
			defaultValue: 1
		}
	});
};
