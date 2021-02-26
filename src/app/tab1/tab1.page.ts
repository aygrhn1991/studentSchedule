import { Component } from '@angular/core';
import { CourseOfDay, CourseOfWeek } from '../model/course.model';
import { DataServiceService } from '../service/data-service.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  course: CourseOfWeek = this.dataService.course;
  courseOfDay: CourseOfDay;
  date: Date;
  dateString: string;
  weekdayString: string;

  constructor(private dataService: DataServiceService,
    private util: UtilService) { }

  ngOnInit() {
    this.date = new Date();
    this.addDay(0);
  }

  addDay(day: number) {
    this.date = this.util.addDay(this.date, day);
    this.dateString = this.util.dateToMMDD(this.date);
    this.weekdayString = this.util.dateToWeekday(this.date);
    let weekdayIndex = this.date.getDay();
    weekdayIndex = weekdayIndex == 0 ? 7 : weekdayIndex;
    this.courseOfDay = this.course['day' + weekdayIndex];
  }

}
