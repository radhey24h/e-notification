import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/+core/result/result.service';
import { Result } from 'src/app/+shared/models/result';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Result[];
  constructor(private resultService: ResultService) { }

  ngOnInit() {
    this.showResult();
  }

  showResult() {
    this.resultService.getResult()
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data) {
    this.results = data;
  }
  onNavigate(url: string) {
    window.open(url, '_blank');
  }
}
