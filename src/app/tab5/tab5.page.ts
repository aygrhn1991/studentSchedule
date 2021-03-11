import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NoteModel } from '../model/note.model';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

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
