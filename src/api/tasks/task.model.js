export const declareModelTask = (sequelize, type) => {
	return sequelize.define('Task', {
		id: {
			type: type.INTEGER,
			autoIncrement: true,
			unique: true,
			primaryKey: true,
		},
		name: {
			type: type.STRING,
			allowNull: false,
		},
		description: {
			type: type.STRING,
			allowNull: true,
		},
		status: {
			type: type.STRING,
			allowNull: true,
		},
		active: {
			type: type.BOOLEAN,
			allowNull: false,
			defaultValue: 1
		},
	});
};
