import express from 'express';
import { ApiRoutes } from './api.routes';
import { UserRoutes } from './user.routes';
import { NoticeboardRoutes } from './noticeboard.routes';
import { SyllabusRoutes } from './syllabus.routes';
import { ResultRoutes } from './result.routes';
import { ExaminationRoutes } from './examination.routes';
import { UniversityRoutes } from './university.routes';
import { StateRoutes } from './state.routes';

export class RestRouter {
    public apiRoute: ApiRoutes = new ApiRoutes();
    public userRoute: UserRoutes = new UserRoutes();
    public noticeboardRoutes: NoticeboardRoutes= new NoticeboardRoutes()
    public stateRoute: StateRoutes= new StateRoutes()
    public universityRoute: UniversityRoutes= new UniversityRoutes()
    public examinationRoute: ExaminationRoutes= new ExaminationRoutes()
    public resultRoute: ResultRoutes= new ResultRoutes()
    public syllabusRoute: SyllabusRoutes= new SyllabusRoutes()

    routes(app: express.Application) {
        this.apiRoute.routes(app);
        this.userRoute.routes(app);
        this.noticeboardRoutes.routes(app);
        this.stateRoute.routes(app);
        this.universityRoute.routes(app);
        this.examinationRoute.routes(app);
        this.resultRoute.routes(app);
        this.syllabusRoute.routes(app);
    }
}