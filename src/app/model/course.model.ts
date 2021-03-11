export class CourseModel {
    constructor() {
        this.name = null;
        this.classroom = null;
    }
    name: string;
    classroom: string;
}
export class CourseOfDay {
    constructor() {
        this.course1 = new CourseModel();
        this.course2 = new CourseModel();
        this.course3 = new CourseModel();
        this.course4 = new CourseModel();
        this.course5 = new CourseModel();
    }
    course1: CourseModel;
    course2: CourseModel;
    course3: CourseModel;
    course4: CourseModel;
    course5: CourseModel;
}
export class CourseOfWeek {
    constructor() {
        this.day1 = new CourseOfDay();
        this.day2 = new CourseOfDay();
        this.day3 = new CourseOfDay();
        this.day4 = new CourseOfDay();
        this.day5 = new CourseOfDay();
        this.day6 = new CourseOfDay();
        this.day7 = new CourseOfDay();
    }
    day1: CourseOfDay;
    day2: CourseOfDay;
    day3: CourseOfDay;
    day4: CourseOfDay;
    day5: CourseOfDay;
    day6: CourseOfDay;
    day7: CourseOfDay;
}