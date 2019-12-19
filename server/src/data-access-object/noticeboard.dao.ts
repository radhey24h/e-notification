import { Request, Response, NextFunction } from 'express';
import { MongooseDocument } from 'mongoose';
import { Noticeboard } from '../models/noticeboard';

export class NoticeboardDAO {

    getAllNoticeboard(req: Request, res: Response, next: NextFunction) {
        Noticeboard.find({}, (error: Error, Noticeboards: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(Noticeboards);
        });
    }

    getNoticeboard(req: Request, res: Response, next: NextFunction) {
        let noticeboard = Noticeboard.findById(req.params.id, (err: any, Noticeboard: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(Noticeboard);
            }
        });
    }

    addNoticeboard(req: Request, res: Response, next: NextFunction) {
        const noticeboard = new Noticeboard(req.body);
        noticeboard.save((error: Error, pokemon: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(pokemon);
        });
    }

    updateNoticeboard(req: Request, res: Response, next: NextFunction) {
        const noticeboardId = req.params.id;
        Noticeboard.findByIdAndUpdate(
            noticeboardId,
            req.body,
            (error: Error, Noticeboard: any) => {
                if (error) {
                    res.send(error);
                }
                const message = Noticeboard
                    ? 'Updated successfully'
                    : 'Noticeboard not found :(';
                res.send(message);
            }
        );
    }

    deleteNoticeboard(req: Request, res: Response, next: NextFunction) {
        const noticeboardID = req.params.id;
        Noticeboard.findByIdAndDelete(noticeboardID, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
            }
            const message = deleted ? 'Deleted successfully' : 'Noticeboards not found :(';
            res.send(message);
        });
    }
}
