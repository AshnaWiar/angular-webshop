import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { NavigationDropdownComponent } from './components/navigation-dropdown/navigation-dropdown.component';
import { DropdownTriggerDirective } from './components/navigation-dropdown/directives/dropdown-trigger.directive';
import { IfDropdownIsOpenDirective } from './components/navigation-dropdown/directives/if-dropdown-is-open.directive';
import { OutSideClickDirective } from './components/navigation-dropdown/directives/out-side-click.directive';

@NgModule({
  declarations: [NavigationDropdownComponent, DropdownTriggerDirective, IfDropdownIsOpenDirective, OutSideClickDirective],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NavigationDropdownComponent]
})
export class ShoppingCartModule { }
