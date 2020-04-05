import { Directive, HostListener } from '@angular/core';
import { DropdownTriggerService } from '../dropdown-trigger.service';

@Directive({
  selector: '[dropdownTrigger]',
  host: {
    '[class.dropdown-toggle]': 'true',
    '[class.active]': 'dropdownService.isOpen()',
    '[attr.aria-haspopup]': '"menu"',
    '[attr.aria-expanded]': 'dropdownService.isOpen()',
  }
})
export class DropdownTriggerDirective {

  constructor(private dropdownService: DropdownTriggerService) {
    dropdownService.isOpen()
  }

  @HostListener('click',['$event'])
  onMouseClick(event: MouseEvent){
    this.dropdownService.toggle();
  }
}
