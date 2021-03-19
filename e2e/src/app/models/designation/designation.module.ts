import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [AddEditComponent, ListComponent, LayoutComponent],
  imports: [
    CommonModule,
    DesignationRoutingModule
  ]
})
export class DesignationModule { }
