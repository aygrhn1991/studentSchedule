import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseOfWeek } from 'src/app/model/course.model';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ToolService } from 'src/app/service/tool.service';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-tab1-edit',
  templateUrl: './tab1-edit.component.html',
  styleUrls: ['./tab1-edit.component.scss'],
})
export class Tab1EditComponent implements OnInit {

  course: CourseOfWeek = this.dataService.course;

  constructor(private router: Router,
    private dataService: DataServiceService,
    private tool: ToolService,
    private util: UtilService) {
  }

  ngOnInit() { }

  save() {
    this.dataService.saveCourse();
    this.tool.toast('操作完成');
    this.router.navigate(['/tabs/tab1']);
  }
}
