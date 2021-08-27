import { Request, Response, NextFunction} from 'express';

class SubfoldersController {

    static async create(req: Request, res: Response, next: NextFunction) {
        try {

            return res.send('ok');
        } catch (err) {
            next(err);
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {

            return res.send('ok');
        } catch (err) {
            next(err);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {

            return res.send('ok');
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

export default SubfoldersController;
