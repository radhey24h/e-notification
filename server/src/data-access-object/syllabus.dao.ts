import { Request, Response, NextFunction } from 'express';
import { MongooseDocument } from 'mongoose';
import { Syllabus } from '../models/syllabus';

export class SyllabusDAO {

    getAllSyllabus(req: Request, res: Response, next: NextFunction) {
        Syllabus.find({}, (error: Error, Syllabuss: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            
            res.json(Syllabuss);
        });
    }

    getSyllabus(req: Request, res: Response, next: NextFunction) {
        let syllabus = Syllabus.findById(req.params.id, (err: any, Syllabus: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(Syllabus);
            }
        });
    }

    addSyllabus(req: Request, res: Response, next: NextFunction) {
        
        const syllabus = new Syllabus(req.body);
        syllabus.save((error: Error, syllabus: MongooseDocument) => {
            if (error) {
                res.send(error);
            }
            res.json(syllabus);
        });
    }

    updateSyllabus(req: Request, res: Response, next: NextFunction) {
        const syllabusId = req.params.id;
        Syllabus.findByIdAndUpdate(
            syllabusId,
            req.body,
            (error: Error, Syllabus: any) => {
                if (error) {
                    res.send(error);
                }
                const message = Syllabus
                    ? 'Updated successfully'
                    : 'Syllabus not found :(';
                res.send(message);
            }
        );
    }

    deleteSyllabus(req: Request, res: Response, next: NextFunction) {
        const syllabusID = req.params.id;
        Syllabus.findByIdAndDelete(syllabusID, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
            }
            const message = deleted ? 'Deleted successfully' : 'Syllabuss not found :(';
            res.send(message);
        });
    }
}
