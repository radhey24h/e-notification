import { Component, OnInit } from '@angular/core';
import { ExaminationService } from 'src/app/+core/examination/examination.service';
import { Examination } from 'src/app/+shared/models/examination';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.css']
})
export class ExaminationComponent implements OnInit {

  examination: Examination[];
  exam: Examination;
  isExamSelected = true;
  constructor(private examinationService: ExaminationService) { }

  ngOnInit() {
    this.showExamination();
  }

  showExamination() {
    this.examinationService.getExamination()
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data) {
    this.examination = data;
  }

  showExaminationDetails(title: string) {
    this.exam = this.examination.filter(t => t.title === title)[0];
    this.isExamSelected = false;
  }
  onNavigate(url: string) {
    this.isExamSelected = true;
  }
}
