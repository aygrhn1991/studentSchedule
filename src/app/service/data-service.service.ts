import { Injectable } from '@angular/core';
import { CourseOfWeek } from '../model/course.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private util: UtilService) {
    this.getCourse();
   }

  course: CourseOfWeek;
  getCourse() {
    let courseStorage = localStorage.getItem('course');
    if (this.util.isNull(courseStorage)) {
      this.course = new CourseOfWeek();
    } else {
      this.course = JSON.parse(courseStorage);
    }
  }
  saveCourse() {
    localStorage.setItem('course', JSON.stringify(this.course));
  }
}
