export class NoteModel {
    constructor() {
        this.id = new Date().getTime();
        this.title = null;
        this.datetime = null;
        this.content = null;
    }
    id: number;
    title: string;
    datetime: string;
    content: string;
}