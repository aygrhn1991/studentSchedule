import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteModel } from 'src/app/model/note.model';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ToolService } from 'src/app/service/tool.service';

@Component({
  selector: 'app-tab2-edit',
  templateUrl: './tab2-edit.component.html',
  styleUrls: ['./tab2-edit.component.scss'],
})
export class Tab2EditComponent implements OnInit {

  note: NoteModel;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dataService: DataServiceService,
    private tool: ToolService) {
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id']);
    if (id == 0) {
      this.note = new NoteModel();
    } else {
      this.dataService.note.forEach(x => {
        if (x.id == id) {
          this.note = x;
        }
      })
    }
  }

  save() {
    this.dataService.note.push(this.note);
    this.dataService.saveNote();
    this.tool.toast('操作完成');
    this.router.navigate(['/tabs/tab2']);
  }

}
