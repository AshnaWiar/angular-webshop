import { Directive, TemplateRef, ViewContainerRef, ElementRef, HostListener, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { DropdownTriggerService } from '../dropdown-trigger.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[IfDropdownIsOpen]',
})
export class IfDropdownIsOpenDirective implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(
    private dropdownService: DropdownTriggerService,
    private template: TemplateRef<any>,
    private container: ViewContainerRef,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.subscription = this.dropdownService.onToggle().subscribe((isOpen) => {
      this.onDropdownToggle(isOpen);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @Input()
  setIsOpen(value: boolean) {
    this.dropdownService.setIsOpen(value);
  }

  @Output()
  getIsOpen() {
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
