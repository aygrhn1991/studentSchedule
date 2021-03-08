import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PlanModel } from '../model/plan.model';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  plan: Array<PlanModel> = this.dataService.plan;

  constructor(private dataService: DataServiceService,
    public alertController: AlertController) { }

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
          this.dataService.note.splice(index, 1);
          this.dataService.saveNote();
        }
      }]
    });
    await alert.present();
  }

}
