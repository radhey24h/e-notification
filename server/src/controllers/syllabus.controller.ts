import { Request, Response, NextFunction } from 'express';
import { SyllabusDAO } from '../data-access-object/syllabus.dao';
import Logger from '../utilities/logger';

export class SyllabusController {

    public getAllSyllabus(req: Request, res: Response, next: NextFunction) {

        Logger.info('getSyllabuss :: Syllabuss');

        let syllabussDAO = new SyllabusDAO();
        syllabussDAO.getAllSyllabus(req, res, next);
    }
    public getSyllabus(req: Request, res: Response, next: NextFunction) {

        Logger.info('getSyllabus :: Syllabuss');

        let syllabussDAO = new SyllabusDAO();
        syllabussDAO.getSyllabus(req, res, next);
    }
    public addSyllabus(req: Request, res: Response, next: NextFunction) {

        Logger.info('addSyllabuss :: Syllabuss');

        let syllabussDAO = new SyllabusDAO();
        syllabussDAO.addSyllabus(req, res, next);
    }
    public updateSyllabus(req: Request, res: Response, next: NextFunction) {

        Logger.info('updateSyllabuss :: Syllabuss');

        let syllabussDAO = new SyllabusDAO();
        syllabussDAO.updateSyllabus(req, res, next);
    }
    public deleteSyllabus(req: Request, res: Response, next: NextFunction) {

        Logger.info('deleteSyllabuss :: Syllabuss');

        let syllabussDAO = new SyllabusDAO();
        syllabussDAO.deleteSyllabus(req, res, next);
    }
}
