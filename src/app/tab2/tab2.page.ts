import { Component } from '@angular/core';
import { NoteModel } from '../model/note.model';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  note: Array<NoteModel> = this.dataService.note;

  constructor(private dataService: DataServiceService) { }

}
