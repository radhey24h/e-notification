import { Request, Response, NextFunction } from 'express';
import { NoticeboardDAO } from '../data-access-object/noticeboard.dao';
import Logger from '../utilities/logger';

export class NoticeboardController {

    public getAllNoticeboard(req: Request, res: Response, next: NextFunction) {

        Logger.info('getNoticeboards :: Noticeboards');

        let noticeboardsDAO = new NoticeboardDAO();
        noticeboardsDAO.getAllNoticeboard(req, res, next);
    }
    public getNoticeboard(req: Request, res: Response, next: NextFunction) {

        Logger.info('getNoticeboard :: Noticeboards');

        let noticeboardsDAO = new NoticeboardDAO();
        noticeboardsDAO.getNoticeboard(req, res, next);
    }
    public addNoticeboard(req: Request, res: Response, next: NextFunction) {

        Logger.info('addNoticeboards :: Noticeboards');

        let noticeboardsDAO = new NoticeboardDAO();
        noticeboardsDAO.addNoticeboard(req, res, next);
    }
    public updateNoticeboard(req: Request, res: Response, next: NextFunction) {

        Logger.info('updateNoticeboards :: Noticeboards');

        let noticeboardsDAO = new NoticeboardDAO();
        noticeboardsDAO.updateNoticeboard(req, res, next);
    }
    public deleteNoticeboard(req: Request, res: Response, next: NextFunction) {

        Logger.info('deleteNoticeboards :: Noticeboards');

        let noticeboardsDAO = new NoticeboardDAO();
        noticeboardsDAO.deleteNoticeboard(req, res, next);
    }
}
