import { Component, OnInit } from '@angular/core';
import { SyllabusService } from 'src/app/+core/syllabus/syllabus.service';
import { Syllabus } from 'src/app/+shared/models/syllabus';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  syllabus: Syllabus[];
  selectedSyllabus: Syllabus[];
  category: string[];
  isCategorySelected = true;
  constructor(private syllabusService: SyllabusService) { }

  ngOnInit() {
    this.showSyllabus();
  }

  showSyllabus() {
    this.syllabusService.getSyllabus()
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data) {
    this.syllabus = data;
  }
  displaySyllabus(category: string) {
    this.isCategorySelected = false;
    this.selectedSyllabus = this.syllabus.filter(t => t.category === category);
  }
  onNavigate() {
    this.isCategorySelected = true;
  }
}
