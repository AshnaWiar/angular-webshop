import { Directive, TemplateRef, ViewContainerRef, ElementRef, HostListener, Input, Output } from '@angular/core';
import { DropdownTriggerService } from '../dropdown-trigger.service';

@Directive({
  selector: '[IfDropdownIsOpen]',
})
export class IfDropdownIsOpenDirective {

  constructor(
    private dropdownService: DropdownTriggerService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef,
    private el: ElementRef
  ) {
    
    dropdownService.onToggle().subscribe((isOpen) => {
      this.onDropdownToggle(isOpen);
    });

  }

  @Input()
  setIsOpen(value: boolean) {
    this.dropdownService.setIsOpen(value);
  }

  @Output()
  getIsOpen(){
    return this.dropdownService.getDropdownState();
  }

  onDropdownToggle(isOpen: boolean) {   
    if (isOpen) {
      return this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }
}
