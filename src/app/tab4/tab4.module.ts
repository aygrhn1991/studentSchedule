import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4Page } from './tab4.page';
import { RouterModule, Routes } from '@angular/router';
import { Tab4EditComponent } from './tab4-edit/tab4-edit.component';

const routes: Routes = [
  { path: '', component: Tab4Page },
  { path: 'tab4-edit/:id', component: Tab4EditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Tab4Page,
    Tab4EditComponent
  ]
})
export class Tab4PageModule { }
