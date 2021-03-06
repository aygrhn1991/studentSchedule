import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NoteModel } from '../model/note.model';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  note: Array<NoteModel> = this.dataService.note;

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
