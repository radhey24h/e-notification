import { ExaminationController } from '../controllers/examination.controller'
import express = require('express');

export class ExaminationRoutes {

    examinationController: ExaminationController = new ExaminationController();

    public routes(app: express.Application): void {
        app.route('/api/getExamination/:id').get(this.examinationController.getExamination);
        app.route('/api/getAllExamination').get(this.examinationController.getAllExamination);
        app.route('/api/updateExamination').put(this.examinationController.updateExamination);
        app.route('/api/addExamination').post(this.examinationController.addExamination);
        app.route('/api/deleteExamination').post(this.examinationController.deleteExamination);
    }
}