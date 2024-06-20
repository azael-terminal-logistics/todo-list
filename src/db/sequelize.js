import { Sequelize } from 'sequelize';
import { declareModelUser } from '../api/users/user.model';
import { declareModelTask } from '../api/tasks/task.model';
import { CONFIG } from '../config';

const uri = `mysql://${CONFIG.DB.MYSQL_USER}:${CONFIG.DB.MYSQL_PASSWORD}@${CONFIG.DB.MYSQL_HOST}:${CONFIG.DB.MYSQL_PORT}/${CONFIG.DB.MYSQL_DATABASE}`;
const sequelize = new Sequelize(uri);

export const user = declareModelUser(sequelize, Sequelize);
export const task = declareModelTask(sequelize, Sequelize);

user.hasMany(task);
task.belongsTo(user);

sequelize
.sync({ force: false })
.then(() => {
	console.log('Tables created successfully!');
})
.catch((error) => {
	console.error('Unable to create table : ', error);
});