export class CourseModel {
    constructor() {
        this.name = null;
        this.classroom = null;
    }
    name: string;
    classroom: string;
}
export class CourseOfDayModel {
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
        this.day1 = new CourseOfDayModel();
        this.day2 = new CourseOfDayModel();
        this.day3 = new CourseOfDayModel();
        this.day4 = new CourseOfDayModel();
        this.day5 = new CourseOfDayModel();
        this.day6 = new CourseOfDayModel();
        this.day7 = new CourseOfDayModel();
    }
    day1: CourseOfDayModel;
    day2: CourseOfDayModel;
    day3: CourseOfDayModel;
    day4: CourseOfDayModel;
    day5: CourseOfDayModel;
    day6: CourseOfDayModel;
    day7: CourseOfDayModel;
}

// export class CourseOfWeek {
//     day1: {
//         course1: { name: null, classroom: null },
//         course2: { name: null, classroom: null },
//         course3: { name: null, classroom: null },
//         course4: { name: null, classroom: null },
//         course5: { name: null, classroom: null },
//     };
//     day2: {
//         course1: { name: null, classroom: null },
//         course2: { name: null, classroom: null },
//         course3: { name: null, classroom: null },
//         course4: { name: null, classroom: null },
//         course5: { name: null, classroom: null },
//     };
//     day3: {
//         course1: { name: null, classroom: null },
//         course2: { name: null, classroom: null },
//         course3: { name: null, classroom: null },
//         course4: { name: null, classroom: null },
//         course5: { name: null, classroom: null },
//     };
//     day4: {
//         course1: { name: null, classroom: null },
//         course2: { name: null, classroom: null },
//         course3: { name: null, classroom: null },
//         course4: { name: null, classroom: null },
//         course5: { name: null, classroom: null },
//     };
//     day5: {
//         course1: { name: null, classroom: null },
//         course2: { name: null, classroom: null },
//         course3: { name: null, classroom: null },
//         course4: { name: null, classroom: null },
//         course5: { name: null, classroom: null },
//     };
//     day6: {
//         course1: { name: null, classroom: null },
//         course2: { name: null, classroom: null },
//         course3: { name: null, classroom: null },
//         course4: { name: null, classroom: null },
//         course5: { name: null, classroom: null },
//     };
//     day7: {
//         course1: { name: null, classroom: null },
//         course2: { name: null, classroom: null },
//         course3: { name: null, classroom: null },
//         course4: { name: null, classroom: null },
//         course5: { name: null, classroom: null },
//     }
// }