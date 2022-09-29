import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfaceJobs } from 'src/app/core/models/jobs.model';
import { ButtonNsModel } from '../button/model/button-ns.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item!: InterfaceJobs.IJobs
  @Output() miEvento = new EventEmitter<InterfaceJobs.IJobs>()
  req: any
  buttonEdit = new ButtonNsModel.ButtonClass('Editar', 'primary')
  buttonDelete = new ButtonNsModel.ButtonClass('Eliminar', 'primary')

  constructor() {}

  ngOnInit(): void {
  }
  ejecutarEvento(accion: string) {
    let datos = {...this.item, ...{type: accion}}
    this.miEvento.emit(datos)
  }
}
