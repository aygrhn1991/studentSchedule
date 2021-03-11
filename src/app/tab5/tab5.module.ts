import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab5Page } from './tab5.page';
import { RouterModule, Routes } from '@angular/router';
import { Tab5EditComponent } from './tab5-edit/tab5-edit.component';

const routes: Routes = [
  { path: '', component: Tab5Page },
  { path: 'tab5-edit/:id', component: Tab5EditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
