import { newTaskData,getRelatedTaskList,getRelatedByIdUserId,updateTaskData,deleteTaskData} from './task.service';
import { unauthorized } from '../helpers/general.helper'

export const newTask = async (req, res) => {
	const userId = req.decoded.id;
	const {body} = req;
	const result = await newTaskData(body,userId);
	return res.status(201).json({
		success: 1,
		message: "success",
		data:{
			task:result
		}
	});
};

export const getAllTasks = async (req,res) =>{
	const userId = req.decoded.id;
	const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

	const offset = (page - 1) * limit;
	const { count, rows } = await getRelatedTaskList(userId, offset, limit);

	return res.status(200).json({
		success: 1,
		message: "success",
		data: {
			tasks: rows,
			totalItems: count,
			totalPages: Math.ceil(count / limit),
			currentPage: page
		}
	});
}

export const getById = async (req,res) =>{
	const userId = req.decoded.id;
	const taskId=req.params.id;
	const result = await getRelatedByIdUserId(taskId,userId);
	return res.status(200).json({
		success: 1,
		message: "success",
		data:{
			task:result
		}
	});
}

export const updateTask = async (req,res)=>{
	const userId = req.decoded.id;
	const taskId=req.params.id;
	const {body} = req;
	const result= await getRelatedByIdUserId(taskId,userId);
	if (result) {
		const updated = await updateTaskData(body,userId,taskId);
		return res.status(updated?201:422).json({
			success: updated,
			message: updated?'Successful':'Error to update task'
		})
	}
	return unauthorized(req,res);
}

export const deleteTask = async (req,res)=>{
	const userId = req.decoded.id;
	const taskId=req.params.id;
	const result= await getRelatedByIdUserId(taskId,userId);
	if (result) {
		const updated = await deleteTaskData(taskId,userId);
		console.log(updated)
		return res.status(updated?201:422).json({
			success: updated,
			message: updated?'Successful':'Error to delete task'
		})
	}
	return unauthorized(req,res);
}