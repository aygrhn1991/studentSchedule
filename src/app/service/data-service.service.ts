import { Injectable } from '@angular/core';
import { CourseOfWeek } from '../model/course.model';
import { NoteModel } from '../model/note.model';
import { PlanModel } from '../model/plan.model';
import { ScheduleModel } from '../model/schedule.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private util: UtilService) {
    this.getCourse();
    this.getNote();
    this.getPlan();
    this.getSchedule();
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

  note: Array<NoteModel>;
  getNote() {
    let noteStroage = localStorage.getItem('note');
    if (this.util.isNull(noteStroage)) {
      this.note = new Array<NoteModel>();
    } else {
      this.note = JSON.parse(noteStroage);
    }
  }
  saveNote() {
    localStorage.setItem('note', JSON.stringify(this.note));
  }

  plan: Array<PlanModel>;
  getPlan() {
    let planStroage = localStorage.getItem('plan');
    if (this.util.isNull(planStroage)) {
      this.plan = new Array<PlanModel>();
    } else {
      this.plan = JSON.parse(planStroage);
    }
  }
  savePlan() {
    localStorage.setItem('plan', JSON.stringify(this.plan));
  }

  schedule: Array<ScheduleModel>;
  getSchedule() {
    let scheduleStroage = localStorage.getItem('schedule');
    if (this.util.isNull(scheduleStroage)) {
      this.schedule = new Array<ScheduleModel>();
    } else {
      this.schedule = JSON.parse(scheduleStroage);
    }
  }
  saveSchedule() {
    this.schedule.sort((a, b) => { return this.util.stringToDate(a.date).getTime() - this.util.stringToDate(b.date).getTime(); });
    localStorage.setItem('schedule', JSON.stringify(this.schedule));
  }
}
