import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteModel } from 'src/app/model/note.model';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ToolService } from 'src/app/service/tool.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-tab2-edit',
  templateUrl: './tab2-edit.component.html',
  styleUrls: ['./tab2-edit.component.scss'],
})
export class Tab2EditComponent implements OnInit {

  note: NoteModel;
  id: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dataService: DataServiceService,
    private tool: ToolService,
    private util: UtilService) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id']);
    if (this.id == 0) {
      this.note = new NoteModel();
    } else {
      this.dataService.note.forEach(x => {
        if (x.id == this.id) {
          this.note = x;
        }
      })
    }
  }

  save() {
    if (this.util.isNull(this.note.content)) {
      this.tool.toast('请完善信息');
      return;
    }
    if (this.id == 0) {
      this.dataService.note.push(this.note);
    }
    this.dataService.saveNote();
    this.tool.toast('操作完成');
    this.router.navigate(['/tabs/tab2']);
  }

}
