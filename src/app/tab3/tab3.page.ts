import { Component } from '@angular/core';
import { CourseOfDay } from '../model/course.model';
import { TimelineModel } from '../model/timeline.model';
import { DataServiceService } from '../service/data-service.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  timeLine: Array<TimelineModel> = [];
  courseOfDay: CourseOfDay;

  constructor(private dataService: DataServiceService,
    private util: UtilService) { }

  ngOnInit() {
    let weekdayIndex = new Date().getDay();
    weekdayIndex = weekdayIndex == 0 ? 7 : weekdayIndex;
    this.courseOfDay = this.dataService.course['day' + weekdayIndex];
    for (let i = 1; i <= 5; i++) {
      let tl = new TimelineModel();
      tl.type = '课程';
      if (!this.util.isNull(this.courseOfDay['course' + i].name)) {
        tl.content = this.courseOfDay['course' + i].name + this.courseOfDay['course' + i].classroom;
        let time = (i == 1) ? '08:00:00' : (i == 2) ? '10:00:00' : (i == 3) ? '13:30:00' : (i == 4) ? '15:30:00' : '19:00:00';
        tl.time = this.util.stringToDate(this.util.dateToYYYYMMDD(new Date()) + ' ' + time).getTime();
        this.timeLine.push(tl);
      }
    }
    this.dataService.schedule.forEach(x => {
      if (this.util.dateToYYYYMMDD(this.util.stringToDate(x.date)) == this.util.dateToYYYYMMDD(new Date())) {
        let tl = new TimelineModel();
        tl.type = '日程';
        tl.content = x.title;
        tl.time = this.util.stringToDate(x.date).getTime();
        this.timeLine.push(tl);
      }
    })
    this.timeLine.sort((a, b) => { return a.time - b.time; });
    console.log(this.timeLine);
  }

}
