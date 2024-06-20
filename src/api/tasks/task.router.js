import { Router } from 'express';
import { newTaskSchema,updateTaskSchema} from './task.schema';
import { validateSchema } from '../../middleware/validateSchema';
import { tokenValidation } from '../../middleware/tokenValidation';
import { getAllTasks,getById,newTask,updateTask,deleteTask} from './task.controller';
const router = Router();

router.get      ('/',tokenValidation, getAllTasks);
router.post     ('/',tokenValidation, validateSchema(newTaskSchema), newTask);
router.get      ('/:id',tokenValidation, getById);
router.put      ('/:id',tokenValidation, validateSchema(updateTaskSchema), updateTask);
router.delete   ('/:id',tokenValidation, deleteTask);

export const taskRouter = router;