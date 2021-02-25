import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1EditComponent } from './tab1-edit/tab1-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Tab1Page },
  { path: 'tab1-edit', component: Tab1EditComponent }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Tab1Page,
    Tab1EditComponent
  ]
})
export class Tab1PageModule { }
