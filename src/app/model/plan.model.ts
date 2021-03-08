export class PlanModel {
    constructor() {
        this.id = new Date().getTime();
        this.days = 0;
        this.date = null;
        this.content = null;
    }
    id: number;
    days: number;
    date: string;
    content: string;
}