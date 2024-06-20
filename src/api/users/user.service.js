import { user } from '../../db/sequelize';

export const create = async (body) => {
	const newUser = await user.create({
		firstName:body.firstName,
		lastName:body.lastName,
		password:body.password,
		email:body.email,
	});
	return newUser;
};

export const getUserByUserEmail = async (email)=>{
	const userByEmail= await user.findOne({
		where:{email:email}
	})
	return userByEmail;
};

export const getUserById = async (id)=>{
	const userById= await user.findOne({
		where:{id:id}
	})
	return userById;
};

export const changePassword = async (password,email)=>{
	const result= await user.update(
		{password:password},
		{
			where:{email:email}
		}
	)
	return result[0];
}

export const updateUserData = async (body,id)=>{
	const result = await user.update(
		{
			firstName:body.firstName,
			lastName:body.lastName,
		},{
			where:{id:id}
		}
	); 
	return result[0];
}