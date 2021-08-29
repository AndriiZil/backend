import { Router } from 'express';
import FilesController from '../controllers/filesController';

const r = Router();

r.post('/:subfolderId/create', FilesController.create);

r.get('/', FilesController.getAll);

r.get('/:id', FilesController.getById);

r.patch('/:id', FilesController.updateById);

r.delete('/', FilesController.deleteById);

export default r;
