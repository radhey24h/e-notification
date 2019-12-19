import { Request, Response, NextFunction } from 'express';
import { UserDAO } from '../data-access-object/user.dao';
import Logger from '../utilities/logger';

export class UserController {

    public getUser(req: Request, res: Response, next: NextFunction) {
        Logger.info('getUser :: user');
        let userDAO = new UserDAO();
        userDAO.getUser(req, res, next);
    }
    public getAllUser(req: Request, res: Response, next: NextFunction) {
        Logger.info('getUsers :: user');
        let userDAO = new UserDAO();
        userDAO.getAllUser(req, res, next);
    }
    public updateUser(req: Request, res: Response, next: NextFunction) {
        Logger.info('updateUser :: user');
        let userDAO = new UserDAO();
        userDAO.updateUser(req, res, next);
    }
    public addUser(req: Request, res: Response, next: NextFunction) {
        Logger.info('addUser :: user');
        let userDAO = new UserDAO();
        userDAO.addUser(req, res, next);
    }
    public deleteUser(req: Request, res: Response, next: NextFunction) {
        Logger.info('deleteUser :: user');
        let userDAO = new UserDAO();
        userDAO.deleteUser(req, res, next);
    }
}
