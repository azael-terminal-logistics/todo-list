import { task } from '../../db/sequelize';

export const newTaskData = async (body,userId) => {
	const result = await task.create({
		name:body.name,
		description:body.description,
		status:body.status,
		UserId: userId,
	});
	return result;
};

export const updateTaskData = async (body,userId,taskId) => {
	const result = await task.update({
		name:body.name,
		description:body.description,
		status:body.status,
	},{
		where:{id:taskId,UserId:userId,active:1}
	});
	return result[0];
};

export const getRelatedTaskList = async (userId, offset, limit) => {
    const result = await task.findAndCountAll({
        where: { UserId: userId, active: 1 },
        offset: offset,
        limit: limit
    });

    return result;
};

export const getRelatedByIdUserId = async (id,userId)=>{
	const result= await task.findOne({
		where:{id:id,UserId:userId,active:1}
	})
	return result;
};

export const deleteTaskData = async (taskId,userId)=>{
	const result = await task.update({
		active:false
	},{
		where:{id:taskId,UserId:userId,active:1}
	});
	return result[0];
};