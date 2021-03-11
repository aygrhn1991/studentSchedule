import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleModel } from 'src/app/model/schedule.model';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ToolService } from 'src/app/service/tool.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-tab5-edit',
  templateUrl: './tab5-edit.component.html',
  styleUrls: ['./tab5-edit.component.scss'],
})
export class Tab5EditComponent implements OnInit {

  schedule: ScheduleModel;
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
      this.schedule = new ScheduleModel();
      this.schedule.date = this.util.dateToYYYYMMDDHHMM(new Date());
    } else {
      this.dataService.schedule.forEach(x => {
        if (x.id == this.id) {
          this.schedule = x;
        }
      })
    }
  }

  save() {
    if (this.util.isNull(this.schedule.title) || this.util.isNull(this.schedule.content)) {
      this.tool.toast('请完善信息');
      return;
    }
    this.schedule.date = this.util.dateToYYYYMMDDHHMM(new Date(this.schedule.date));
    if (this.id == 0) {
      this.dataService.schedule.push(this.schedule);
    }
    this.dataService.saveSchedule();
    this.tool.toast('操作完成');
    this.router.navigate(['/tabs/tab5']);
  }

}
