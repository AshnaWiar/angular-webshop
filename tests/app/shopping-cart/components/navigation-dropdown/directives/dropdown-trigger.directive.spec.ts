import { TestBed, ComponentFixture, TestBedStatic } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Component } from '@angular/core';
import { DropdownTriggerService } from '@app/shopping-cart/components/navigation-dropdown/dropdown-trigger.service';
import { DropdownTriggerDirective } from '@app/shopping-cart/components/navigation-dropdown/directives/dropdown-trigger.directive';

@Component({
  selector: 'testCartIconDropdownTriggerDirective',
  template: `<button dropdownTrigger>click</button>`,
  styles: []
})
export class TestDropdownTriggerDirectiveComponent { }

describe('DropdownTriggerDirective', () => {

  let component: TestDropdownTriggerDirectiveComponent;
  let fixture: ComponentFixture<TestDropdownTriggerDirectiveComponent>;
  let button: DebugElement;
  let service: DropdownTriggerService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDropdownTriggerDirectiveComponent, DropdownTriggerDirective],
      providers: [DropdownTriggerService]
    });

    fixture = TestBed.createComponent(TestDropdownTriggerDirectiveComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('button'));
    service = TestBed.get(DropdownTriggerService);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new DropdownTriggerDirective(service);
    expect(directive).toBeTruthy();
  });

  it('should have a dropdown-toggle class by default', () => {
    expect(button.nativeElement.classList.contains('dropdown-toggle')).toBeTrue();
  });

  it('should have an active class when clicked', () => {
    button.nativeElement.click();
    fixture.detectChanges();

    expect(button.nativeElement.classList.contains('active')).toBeTrue();
  });

  it('should emit event when clicked', () => {
    spyOn(service.getEventEmitter(), 'emit');
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(service.getEventEmitter().emit).toHaveBeenCalled();
    expect(service.getEventEmitter().emit).toHaveBeenCalledWith(true);
  })

}); 
