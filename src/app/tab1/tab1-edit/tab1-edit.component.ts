import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseOfWeek } from 'src/app/model/course.model';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ToolService } from 'src/app/service/tool.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-tab1-edit',
  templateUrl: './tab1-edit.component.html',
  styleUrls: ['./tab1-edit.component.scss'],
})
export class Tab1EditComponent implements OnInit {

  course: CourseOfWeek = this.dataService.course;

  constructor(private router: Router,
    private dataService: DataServiceService,
    private tool: ToolService,
    private util: UtilService) {
  }

  ngOnInit() {
    this.course.day1.course1.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day1.course1.time));
    this.course.day1.course2.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day1.course2.time));
    this.course.day1.course3.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day1.course3.time));
    this.course.day1.course4.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day1.course4.time));
    this.course.day1.course5.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day1.course5.time));
    this.course.day2.course1.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day2.course1.time));
    this.course.day2.course2.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day2.course2.time));
    this.course.day2.course3.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day2.course3.time));
    this.course.day2.course4.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day2.course4.time));
    this.course.day2.course5.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day2.course5.time));
    this.course.day3.course1.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day3.course1.time));
    this.course.day3.course2.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day3.course2.time));
    this.course.day3.course3.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day3.course3.time));
    this.course.day3.course4.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day3.course4.time));
    this.course.day3.course5.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day3.course5.time));
    this.course.day4.course1.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day4.course1.time));
    this.course.day4.course2.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day4.course2.time));
    this.course.day4.course3.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day4.course3.time));
    this.course.day4.course4.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day4.course4.time));
    this.course.day4.course5.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day4.course5.time));
    this.course.day5.course1.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day5.course1.time));
    this.course.day5.course2.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day5.course2.time));
    this.course.day5.course3.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day5.course3.time));
    this.course.day5.course4.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day5.course4.time));
    this.course.day5.course5.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day5.course5.time));
    this.course.day6.course1.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day6.course1.time));
    this.course.day6.course2.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day6.course2.time));
    this.course.day6.course3.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day6.course3.time));
    this.course.day6.course4.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day6.course4.time));
    this.course.day6.course5.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day6.course5.time));
    this.course.day7.course1.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day7.course1.time));
    this.course.day7.course2.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day7.course2.time));
    this.course.day7.course3.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day7.course3.time));
    this.course.day7.course4.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day7.course4.time));
    this.course.day7.course5.time = this.util.dateToYYYYMMDDHHMMSS(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day7.course5.time));
    console.log(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day1.course1.time);
    console.log(new Date(this.util.dateToYYYYMMDD(new Date()) + ' ' + this.course.day1.course1.time));
    console.log(this.course.day1.course1.time);
  }

  save() {
    this.course.day1.course1.time = this.util.dateToHHMM(new Date(this.course.day1.course1.time));
    this.course.day1.course2.time = this.util.dateToHHMM(new Date(this.course.day1.course2.time));
    this.course.day1.course3.time = this.util.dateToHHMM(new Date(this.course.day1.course3.time));
    this.course.day1.course4.time = this.util.dateToHHMM(new Date(this.course.day1.course4.time));
    this.course.day1.course5.time = this.util.dateToHHMM(new Date(this.course.day1.course5.time));
    this.course.day2.course1.time = this.util.dateToHHMM(new Date(this.course.day2.course1.time));
    this.course.day2.course2.time = this.util.dateToHHMM(new Date(this.course.day2.course2.time));
    this.course.day2.course3.time = this.util.dateToHHMM(new Date(this.course.day2.course3.time));
    this.course.day2.course4.time = this.util.dateToHHMM(new Date(this.course.day2.course4.time));
    this.course.day2.course5.time = this.util.dateToHHMM(new Date(this.course.day2.course5.time));
    this.course.day3.course1.time = this.util.dateToHHMM(new Date(this.course.day3.course1.time));
    this.course.day3.course2.time = this.util.dateToHHMM(new Date(this.course.day3.course2.time));
    this.course.day3.course3.time = this.util.dateToHHMM(new Date(this.course.day3.course3.time));
    this.course.day3.course4.time = this.util.dateToHHMM(new Date(this.course.day3.course4.time));
    this.course.day3.course5.time = this.util.dateToHHMM(new Date(this.course.day3.course5.time));
    this.course.day4.course1.time = this.util.dateToHHMM(new Date(this.course.day4.course1.time));
    this.course.day4.course2.time = this.util.dateToHHMM(new Date(this.course.day4.course2.time));
    this.course.day4.course3.time = this.util.dateToHHMM(new Date(this.course.day4.course3.time));
    this.course.day4.course4.time = this.util.dateToHHMM(new Date(this.course.day4.course4.time));
    this.course.day4.course5.time = this.util.dateToHHMM(new Date(this.course.day4.course5.time));
    this.course.day5.course1.time = this.util.dateToHHMM(new Date(this.course.day5.course1.time));
    this.course.day5.course2.time = this.util.dateToHHMM(new Date(this.course.day5.course2.time));
    this.course.day5.course3.time = this.util.dateToHHMM(new Date(this.course.day5.course3.time));
    this.course.day5.course4.time = this.util.dateToHHMM(new Date(this.course.day5.course4.time));
    this.course.day5.course5.time = this.util.dateToHHMM(new Date(this.course.day5.course5.time));
    this.course.day6.course1.time = this.util.dateToHHMM(new Date(this.course.day6.course1.time));
    this.course.day6.course2.time = this.util.dateToHHMM(new Date(this.course.day6.course2.time));
    this.course.day6.course3.time = this.util.dateToHHMM(new Date(this.course.day6.course3.time));
    this.course.day6.course4.time = this.util.dateToHHMM(new Date(this.course.day6.course4.time));
    this.course.day6.course5.time = this.util.dateToHHMM(new Date(this.course.day6.course5.time));
    this.course.day7.course1.time = this.util.dateToHHMM(new Date(this.course.day7.course1.time));
    this.course.day7.course2.time = this.util.dateToHHMM(new Date(this.course.day7.course2.time));
    this.course.day7.course3.time = this.util.dateToHHMM(new Date(this.course.day7.course3.time));
    this.course.day7.course4.time = this.util.dateToHHMM(new Date(this.course.day7.course4.time));
    this.course.day7.course5.time = this.util.dateToHHMM(new Date(this.course.day7.course5.time));
    this.dataService.saveCourse();
    this.tool.toast('操作完成');
    this.router.navigate(['/tabs/tab1']);
  }
}
