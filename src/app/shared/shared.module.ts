import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClrIconModule, ClrFormsModule, ClrInputModule,ClrDropdownModule, ClrTabsModule, ClrDatagridModule, ClrModalModule} from '@clr/angular';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ClrIconModule,
    ClrDropdownModule,
    ClrFormsModule,
    ClrInputModule,
    FormsModule,
    ReactiveFormsModule,
    ClrTabsModule,
    ClrDatagridModule,
    ClrModalModule
  ]
})
export class SharedModule { }
