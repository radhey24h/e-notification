import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/+core/state/state.service';
import { State } from 'src/app/+shared/models/state';
import { University } from 'src/app/+shared/models/university';
import { UniversityService } from 'src/app/+core/university/university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {
  isStateSelected = true;
  state: State[];
  university: University[];
  constructor(private stateService: StateService, private universityService: UniversityService) { }

  ngOnInit() {
    this.showState();
  }

  showState() {
    this.stateService.getState()
      .subscribe((data) => this.displayStateData(data));
  }
  displayStateData(data) {
    this.state = data;
  }
  showUniversity(stateName: string) {
    this.universityService.getUniversity().subscribe((data) => this.displayUniversityData(data, stateName));
  }
  displayUniversityData(data, state) {
    this.university = data.filter(t => t.stateName === state);
    this.isStateSelected = this.university.length > 0 ? false : true;
  }
  onNavigate(url) {
    window.open(url, '_blank');
  }
}
