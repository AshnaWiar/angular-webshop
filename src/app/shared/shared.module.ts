import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClrIconModule, ClrFormsModule, ClrInputModule,ClrDropdownModule, ClrTabsModule, ClrDatagridModule} from '@clr/angular';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClrIconModule,
    ClrDropdownModule,
    ClrFormsModule,
    ClrInputModule,
    FormsModule,
    ReactiveFormsModule,
    ClrTabsModule,
    ClrDatagridModule
  ],
  exports: [
    ClrIconModule,
    ClrDropdownModule,
    ClrFormsModule,
    ClrInputModule,
    FormsModule,
    ReactiveFormsModule,
    ClrTabsModule,
    ClrDatagridModule
  ]
})
export class SharedModule { }
