import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PlanModel } from '../model/plan.model';
import { DataServiceService } from '../service/data-service.service';
import { ToolService } from '../service/tool.service';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  plan: Array<PlanModel> = this.dataService.plan;

  constructor(private dataService: DataServiceService,
    public alertController: AlertController,
    private util: UtilService,
    private tool: ToolService) { }

  ngOnInit() {
    this.plan.forEach(x => {
      if (!this.util.isNull(x.date)) {
        let now = this.util.getDayStart(new Date()).getTime();
        let last = this.util.getDayStart(this.util.stringToDate(x.date)).getTime();
        if (((now - last) / (24 * 60 * 60 * 1000)) > 1) {
          x.serialDays = 0;
        }
      }
      if (this.util.dateToYYYYMMDD(new Date()) == x.date) {
        x.hasClock = true;
      } else {
        x.hasClock = false;
      }
    });
  }

  async delete(index) {
    const alert = await this.alertController.create({
      message: '确定删除？',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Okay',
        handler: () => {
          this.dataService.plan.splice(index, 1);
          this.dataService.savePlan();
        }
      }]
    });
    await alert.present();
  }
  clock(e: PlanModel) {
    e.date = this.util.dateToYYYYMMDD(new Date());
    e.serialDays++;
    e.totalDays++;
    e.hasClock = true;
    this.dataService.savePlan();
    this.tool.toast('打卡成功');
  }
}
