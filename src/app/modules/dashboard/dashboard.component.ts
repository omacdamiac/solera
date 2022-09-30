import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { InterfaceJobs } from "src/app/core/models/jobs.model";
import { JobsService, MainService } from "src/app/core/services";
import { ListComponent } from "../list/list.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  formJobs: FormGroup;
  nav: InterfaceJobs.INav[];
  @ViewChild('appFom', {static: true}) appFom: HTMLElement;

  constructor(
    private mainService: MainService,
    private jobsService: JobsService,
    private router: Router,
    public toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getMain();
    this.buildForm();
  }

  private getMain(): void {
    this.mainService.getMain().subscribe({
      next: (response: InterfaceJobs.INav[]) => (this.nav = response),
    });
  }

  private buildForm(): void {
    this.formJobs = new FormGroup({});
  }

  private refreshList() {
    this.router.navigateByUrl('/dashboard/list', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/dashboard"])); 
    this.formJobs.reset();
  }

  new(): void {
    if (this.formJobs.valid) {
      let data = this.formJobs.value;    
      if(data.id === undefined) {
        this.jobsService.createJob(data).subscribe({
          next: () =>  this.toastr.success('Exito', 'Oficio guardado!'),
          error: () => this.toastr.warning('Error', 'No guardo el Registro'),
          complete: () => this.refreshList()
        })
      } else {
        this.jobsService.updateJob(data).subscribe({
          next: () =>  this.toastr.success('Exito', 'Oficio Modificado!'),
          error: () => this.toastr.warning('Error', 'No se modifico'),
          complete: () => this.refreshList()
  
        })
      }
    } else {
      this.formJobs.markAllAsTouched();
      this.toastr.warning('Error', 'Campos obligatorios')
    }
  }
}
