import { NoticeboardController } from '../controllers/noticeboard.controller'
import express = require('express');

export class NoticeboardRoutes {

    NoticeboardController: NoticeboardController = new NoticeboardController();

    public routes(app: express.Application): void {

        app.route('/api/getNoticeboard/:id').get(this.NoticeboardController.getNoticeboard);
        app.route('/api/getAllNoticeboard').get(this.NoticeboardController.getAllNoticeboard);
        app.route('/api/addNoticeboard').post(this.NoticeboardController.addNoticeboard);
        app.route('/api/updateNoticeboard/:id').put(this.NoticeboardController.updateNoticeboard);
        app.route('/api/deleteNoticeboard/:id').delete(this.NoticeboardController.deleteNoticeboard);

    }
}