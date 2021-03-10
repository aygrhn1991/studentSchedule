export class PlanModel {
    constructor() {
        this.id = new Date().getTime();
        this.currentDays = 0;
        this.totalDays = 0;
        this.date = null;
        this.content = null;
    }
    id: number;
    currentDays: number;
    totalDays: number;
    date: string;
    content: string;
}