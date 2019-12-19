import { SyllabusController } from '../controllers/syllabus.controller'
import express = require('express');

export class SyllabusRoutes {

    syllabusController: SyllabusController = new SyllabusController();

    public routes(app: express.Application): void {
        app.route('/api/getSyllabus/:id').get(this.syllabusController.getSyllabus);
        app.route('/api/getAllSyllabus').get(this.syllabusController.getAllSyllabus);
        app.route('/api/updateSyllabus').put(this.syllabusController.updateSyllabus);
        app.route('/api/addSyllabus').post(this.syllabusController.addSyllabus);
        app.route('/api/deleteSyllabus').post(this.syllabusController.deleteSyllabus);
    }
}