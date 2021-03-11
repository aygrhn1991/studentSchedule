export class PlanModel {
    constructor() {
        this.id = new Date().getTime();
        this.serialDays = 0;
        this.totalDays = 0;
        this.date = null;
        this.content = null;
        this.hasClock = null;
    }
    id: number;
    serialDays: number;
    totalDays: number;
    date: string;
    content: string;
    hasClock: boolean;
}