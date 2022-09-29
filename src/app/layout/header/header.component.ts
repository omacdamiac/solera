import { Component, Input, OnInit } from '@angular/core';
import { InterfaceJobs } from 'src/app/core/models/jobs.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() options: InterfaceJobs.INav[];
  constructor() { }

  ngOnInit() {
  }

}
