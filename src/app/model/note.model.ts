export class NoteModel {
    constructor() {
        this.id = new Date().getTime();
        this.content = null;
    }
    id: number;
    content: string;
}