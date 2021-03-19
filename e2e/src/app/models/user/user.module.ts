import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [AddEditComponent, ListComponent, LayoutComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
