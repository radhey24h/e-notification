import { Request, Response, NextFunction } from 'express';
import { UniversityDAO } from '../data-access-object/university.dao';
import Logger from '../utilities/logger';

export class UniversityController {

    public getAllUniversity(req: Request, res: Response, next: NextFunction) {

        Logger.info('getUniversitys :: Universitys');

        let universitysDAO = new UniversityDAO();
        universitysDAO.getAllUniversity(req, res, next);
    }
    public getUniversity(req: Request, res: Response, next: NextFunction) {

        Logger.info('getUniversity :: Universitys');

        let universitysDAO = new UniversityDAO();
        universitysDAO.getUniversity(req, res, next);
    }
    public addUniversity(req: Request, res: Response, next: NextFunction) {

        Logger.info('addUniversitys :: Universitys');

        let universitysDAO = new UniversityDAO();
        universitysDAO.addUniversity(req, res, next);
    }
    public updateUniversity(req: Request, res: Response, next: NextFunction) {

        Logger.info('updateUniversitys :: Universitys');

        let universitysDAO = new UniversityDAO();
        universitysDAO.updateUniversity(req, res, next);
    }
    public deleteUniversity(req: Request, res: Response, next: NextFunction) {

        Logger.info('deleteUniversitys :: Universitys');

        let universitysDAO = new UniversityDAO();
        universitysDAO.deleteUniversity(req, res, next);
    }
}
