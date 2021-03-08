export class NoteModel {
    constructor() {
        this.id = new Date().getTime();
        this.title = null;
        this.date = null;
        this.content = null;
    }
    id: number;
    title: string;
    date: string;
    content: string;
}