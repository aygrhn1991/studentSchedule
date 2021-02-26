import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Tab2EditComponent } from './tab2-edit/tab2-edit.component';

const routes: Routes = [
  { path: '', component: Tab2Page },
  { path: 'tab2-edit/:id', component: Tab2EditComponent }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Tab2Page,
    Tab2EditComponent
  ]
})
export class Tab2PageModule { }
