import { Request, Response, NextFunction } from 'express';
import { ExaminationDAO } from '../data-access-object/examination.dao';
import Logger from '../utilities/logger';

export class ExaminationController {

    public getAllExamination(req: Request, res: Response, next: NextFunction) {

        Logger.info('getExaminations :: Examinations');

        let examinationsDAO = new ExaminationDAO();
        examinationsDAO.getAllExamination(req, res, next);
    }
    public getExamination(req: Request, res: Response, next: NextFunction) {

        Logger.info('getExamination :: Examinations');

        let examinationsDAO = new ExaminationDAO();
        examinationsDAO.getExamination(req, res, next);
    }
    public addExamination(req: Request, res: Response, next: NextFunction) {

        Logger.info('addExaminations :: Examinations');

        let examinationsDAO = new ExaminationDAO();
        examinationsDAO.addExamination(req, res, next);
    }
    public updateExamination(req: Request, res: Response, next: NextFunction) {

        Logger.info('updateExaminations :: Examinations');

        let examinationsDAO = new ExaminationDAO();
        examinationsDAO.updateExamination(req, res, next);
    }
    public deleteExamination(req: Request, res: Response, next: NextFunction) {

        Logger.info('deleteExaminations :: Examinations');

        let examinationsDAO = new ExaminationDAO();
        examinationsDAO.deleteExamination(req, res, next);
    }
}
