import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClrIconModule } from '@clr/angular';
import { ClrDropdownModule } from '@clr/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClrIconModule,
    ClrDropdownModule
  ],
  exports: [
    ClrIconModule,
    ClrDropdownModule
  ]
})
export class SharedModule { }
