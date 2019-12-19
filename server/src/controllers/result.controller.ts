import { Request, Response, NextFunction } from 'express';
import { ResultDAO } from '../data-access-object/result.dao';
import Logger from '../utilities/logger';

export class ResultController {

    public getAllResult(req: Request, res: Response, next: NextFunction) {

        Logger.info('getresults :: results');

        let resultsDAO = new ResultDAO();
        resultsDAO.getAllResult(req, res, next);
    }
    public getResult(req: Request, res: Response, next: NextFunction) {

        Logger.info('getresults:: results');

        let resultsDAO = new ResultDAO();
        resultsDAO.getResult(req, res, next);
    }
    public addResult(req: Request, res: Response, next: NextFunction) {

        Logger.info('addresults :: results');

        let resultsDAO = new ResultDAO();
        resultsDAO.addResult(req, res, next);
    }
    public updateResult(req: Request, res: Response, next: NextFunction) {

        Logger.info('updateresults :: results');

        let resultsDAO = new ResultDAO();
        resultsDAO.updateResult(req, res, next);
    }
    public deleteResult(req: Request, res: Response, next: NextFunction) {

        Logger.info('deleteresults :: results');

        let resultsDAO = new ResultDAO();
        resultsDAO.deleteResult(req, res, next);
    }
}
