import { Request, Response, NextFunction} from 'express';
import { getRepository } from 'typeorm';
import { File } from '../models/File';

class FilesController {

    static async createFileSub(req: Request, res: Response, next: NextFunction) {
        try {
            const file = new File();

            file.name = req.body.name;
            file.subfolder = req.params.subfolderId;

            await getRepository(File).save(file);

            return res.send(file);
        } catch (err) {
            next(err);
        }
    }

    static async createFileDir(req: Request, res: Response, next: NextFunction) {
        try {
            const file = new File();

            file.name = req.body.name;
            file.subfolder = null;
            file.directory = req.params.directoryId;

            await getRepository(File).save(file);

            return res.send(file);
        } catch (err) {
            next(err);
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const files = await getRepository(File)
                .createQueryBuilder('file')
                .leftJoinAndSelect('file.subfolder', 'fileSubfolder')
                .leftJoinAndSelect('file.directory', 'fileDirectory')
                .getMany()

            return res.send(files);
        } catch (err) {
            next(err);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const file = await getRepository(File)
                .createQueryBuilder('file')
                .leftJoinAndSelect('file.subfolder', 'fileSubfolder')
                .leftJoinAndSelect('file.directory', 'fileDirectory')
                .where('file.id = :id', { id: req.params.id })
                .getOne()

            return res.send(file);
        } catch (err) {
            next(err);
        }
    }

    static async updateById(req: Request, res: Response, next: NextFunction) {
        try {

            return res.send('ok');
        } catch (err) {
            next(err);
        }
    }

    static async deleteById(req: Request, res: Response, next: NextFunction) {
        try {

            return res.send('ok');
        } catch (err) {
            next(err);
        }
    }

}

export default FilesController;
