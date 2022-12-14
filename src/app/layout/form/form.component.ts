import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { AbstractControl, Form, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ButtonNsModel } from 'src/app/commons/components/button/model/button-ns.model';
import { InputNsModel } from 'src/app/commons/components/input/model/input-ns.model';
import { JobsService } from 'src/app/core/services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() form!: FormGroup;
  @Output() formChange = new EventEmitter<FormGroup>();
focused = true;
buttonGrabar = new ButtonNsModel.ButtonClass('Grabar', 'success')
buttonModificar = new ButtonNsModel.ButtonClass('Modificar', 'success')
buttonCancelar = new ButtonNsModel.ButtonClass('Cancelar', 'danger')
buttonCancelarModificacion = new ButtonNsModel.ButtonClass('No modificar', 'danger')
inputNameValue: string;
  inputName = new InputNsModel.InputClass(
    'Nombre',
    'Ingresar nombre',
    true,
    'name',
    'text'
  )
  inputDescription = new InputNsModel.InputClass(
    'Descripción',
    'Ingresar descripción',
    true,
    'description',
    'text'
  )
  inputId = new InputNsModel.InputClass(
    '',
    '',
    false,
    'id',
    'hidden'
  )

  get formItem(): AbstractControl {
    return this.form.controls['name'];
  }
  constructor(
    private jobsService: JobsService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.jobsService.itemData.subscribe({
      next: value => {
        if(value) {
          setTimeout(() => {
            this.form.controls['name'].setValue(value['name'])
            this.form.controls['description'].setValue(value['description'])
            this.form.controls['id'].setValue(value['id'])
          });
        }
      }
    })
  }

  save() {
    this.formChange.emit(this.form);
  }

  @HostListener('keydown.esc')
  cancel(): void {
    this.form.reset();
  }



}
