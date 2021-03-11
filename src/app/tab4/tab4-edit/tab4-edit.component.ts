import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanModel } from 'src/app/model/plan.model';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ToolService } from 'src/app/service/tool.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-tab4-edit',
  templateUrl: './tab4-edit.component.html',
  styleUrls: ['./tab4-edit.component.scss'],
})
export class Tab4EditComponent implements OnInit {

  plan: PlanModel;
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
      this.plan = new PlanModel();
    } else {
      this.dataService.plan.forEach(x => {
        if (x.id == this.id) {
          this.plan = x;
        }
      })
    }
  }

  save() {
    if (this.util.isNull(this.plan.content)) {
      this.tool.toast('请完善信息');
      return;
    }
    if (this.id == 0) {
      this.dataService.plan.push(this.plan);
    }
    this.dataService.savePlan();
    this.tool.toast('操作完成');
    this.router.navigate(['/tabs/tab4']);
  }

}
