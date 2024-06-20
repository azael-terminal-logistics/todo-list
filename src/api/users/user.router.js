import { Router } from 'express';
import { createUserSchema,loginUserSchema ,forgotPasswordSchema,recoverPasswordSchema,updateUserSchema } from './user.schema';
import { validateSchema } from '../../middleware/validateSchema';
import { tokenValidation } from '../../middleware/tokenValidation';
import { createUser,login,forgotPassword,recoverPassword,updateUser} from './user.controller';
const router = Router();

router.post('/register',validateSchema(createUserSchema), createUser);
router.post('/login',validateSchema(loginUserSchema), login);
router.post('/forgotPassword', validateSchema(forgotPasswordSchema),forgotPassword);
router.post('/recoverPassword', validateSchema(recoverPasswordSchema) ,recoverPassword);
router.put('/updateUser', validateSchema(updateUserSchema),tokenValidation ,updateUser);

export const userRouter = router;
