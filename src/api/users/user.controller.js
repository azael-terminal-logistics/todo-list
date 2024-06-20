import { create,getUserByUserEmail,changePassword,updateUserData,getUserById} from './user.service';
import { hashSync, genSaltSync, compareSync } from 'bcrypt';
import { sign, verify } from 'jsonwebtoken';
import { CONFIG } from '../../config';
import { unauthorized,sendEmail ,unauthorizedTkn } from '../helpers/general.helper'


export const createUser = async (req, res) => {
	const {body} = req;
	body.password = hashSync(body.password, 10);
	const { email } = await create(body);
	return res.status(201).json({
		success: 1,
		message: "User created successfully with email: "+ email,
	});
};

export const login = async (req, res) => {
	const body = req.body;
	const userInfo= await getUserByUserEmail(body.email);
	if (userInfo) {
		const isPassword = compareSync(body.password, userInfo.password);
		if(!isPassword){
			return unauthorized(req,res);
		}
		userInfo.password = undefined;
		const jsontoken = sign({ id: userInfo.id }, CONFIG.JWT.JWT_KEY, {
		  expiresIn: "1h"
		});
		return res.json({
			success: 1,
			message: "Login successfully",
			data:{
				token: jsontoken,
				user: userInfo
			}
		});
	}
	return unauthorized(req,res);
};

export const forgotPassword = async (req,res) => {
	const body = req.body;
	const jsontoken = sign({ email: body.email,fp:1 }, CONFIG.JWT.JWT_KEY, {
		expiresIn: "1h"
	});
	//TODO: change this to an url friendy to user
	const context={
		url_token:jsontoken
	}
	const resSendEmail = await sendEmail('users','forgotPassword','Forgot password',body.email,context);
	return res.json({
		success: 1,
		message: resSendEmail.response
	});
}

export const recoverPassword = async (req,res) => {
	const body = req.body;
	verify(body.token, CONFIG.JWT.JWT_KEY, async (err, decoded) => {
		if (err) {
			return unauthorizedTkn(req,res);
		} else {
			if(!decoded.fp){
				return unauthorizedTkn(req,res);
			}
			const results= await getUserByUserEmail(decoded.email);
			if(!results){
				return unauthorizedTkn(req,res);
			}
			body.password = hashSync(body.password, 10);
			const changedPasssword = await changePassword(body.password,decoded.email);
			return res.status(changedPasssword?201:422).json({
				success: changedPasssword,
				message: changedPasssword?'Successful':'Error to change password'
			})
		}
	});
}

export const updateUser = async (req,res)=>{
	const body = req.body;
	const userId = req.decoded.id;
	const userInfo= await getUserById(userId);
	if (userInfo) {
		const updated = await updateUserData(body,userId);
		return res.status(updated?201:422).json({
			success: updated,
			message: updated?'Successful':'Error to update user'
		})
	}

	return unauthorized(req,res);
}