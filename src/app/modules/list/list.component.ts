import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InterfaceJobs } from 'src/app/core/models/jobs.model';
import { JobsService } from 'src/app/core/services';
import { FormComponent } from 'src/app/layout/form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
jobs: InterfaceJobs.IJobs[];
constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService,
    public toastr: ToastrService,
  ) {
    this.route.params.subscribe({
      next: rout => console.log(rout.item)
    })
  }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobsService.getJobs().subscribe({
      next: (response: InterfaceJobs.IJobs[]) => (this.jobs = response),
    });
  }

  removeJob(item: any): void {
    if(item.type === 'D') {
      this.jobsService.delete(item.id).subscribe({
        next: () => {
          this.toastr.warning('Eliminado', 'Se elimino el registro!');
          this.getJobs();
        }
      })
    } else {
      this.jobsService._itemData.next(item);
    }
  }

}
