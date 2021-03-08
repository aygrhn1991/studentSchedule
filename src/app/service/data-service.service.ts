import { Injectable } from '@angular/core';
import { CourseOfWeek } from '../model/course.model';
import { NoteModel } from '../model/note.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private util: UtilService) {
    this.getCourse();
    this.getNote();
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
    this.note.sort((a, b) => { return this.util.stringToDate(a.datetime).getTime() - this.util.stringToDate(b.datetime).getTime(); });
    localStorage.setItem('note', JSON.stringify(this.note));
  }
}
