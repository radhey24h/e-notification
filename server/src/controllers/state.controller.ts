import { Request, Response, NextFunction } from 'express';
import { StateDAO } from '../data-access-object/state.dao';
import Logger from '../utilities/logger';

export class StateController {

    public getAllState(req: Request, res: Response, next: NextFunction) {

        Logger.info('getStates :: States');

        let statesDAO = new StateDAO();
        statesDAO.getAllState(req, res, next);
    }
    public getState(req: Request, res: Response, next: NextFunction) {

        Logger.info('getState :: States');

        let statesDAO = new StateDAO();
        statesDAO.getState(req, res, next);
    }
    public addState(req: Request, res: Response, next: NextFunction) {

        Logger.info('addStates :: States');

        let statesDAO = new StateDAO();
        statesDAO.addState(req, res, next);
    }
    public updateState(req: Request, res: Response, next: NextFunction) {

        Logger.info('updateStates :: States');

        let statesDAO = new StateDAO();
        statesDAO.updateState(req, res, next);
    }
    public deleteState(req: Request, res: Response, next: NextFunction) {

        Logger.info('deleteStates :: States');

        let statesDAO = new StateDAO();
        statesDAO.deleteState(req, res, next);
    }
}
