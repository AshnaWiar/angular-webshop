import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDropdownComponent } from '@app/shopping-cart/components/navigation-dropdown/navigation-dropdown.component';
import { By } from '@angular/platform-browser';
import { DropdownTriggerDirective } from '@app/shopping-cart/components/navigation-dropdown/directives/dropdown-trigger.directive';
import { IfDropdownIsOpenDirective } from '@app/shopping-cart/components/navigation-dropdown/directives/if-dropdown-is-open.directive';
import { OutSideClickDirective } from '@app/shopping-cart/components/navigation-dropdown/directives/out-side-click.directive';
import { DropdownTriggerService } from '@app/shopping-cart/components/navigation-dropdown/dropdown-trigger.service';

describe('NavigationDropdownComponent', () => {
  let component: NavigationDropdownComponent;
  let fixture: ComponentFixture<NavigationDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationDropdownComponent, DropdownTriggerDirective,
        IfDropdownIsOpenDirective, OutSideClickDirective],
      providers: [DropdownTriggerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a dropdown when click on the icon', () => {
    let dropdownMenu = fixture.debugElement.query(By.css('.dropdown-menu'));
    expect(dropdownMenu).toBeNull();

    const navIcon = fixture.debugElement.query(By.css('.nav-icon'));
    navIcon.nativeElement.click();
    fixture.detectChanges();

    dropdownMenu = fixture.debugElement.query(By.css('.dropdown-menu'));
    expect(dropdownMenu).toBeTruthy();
  });

  
  xit('should have a empty basket model in the component', () => {
    expect(false).toBeTrue();
  })

  xit('should add item to the basket model', () => {
    expect(false).toBeTrue();
  });

  xit('should show a dropdown with basket items', () => {
    expect(false).toBeTrue();
  });

  xit('should show a dropdown with empty message', () => {
    expect(false).toBeTrue();
  });
});
