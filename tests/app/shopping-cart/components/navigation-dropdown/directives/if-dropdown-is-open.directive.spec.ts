import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { IfDropdownIsOpenDirective } from '@app/shopping-cart/components/navigation-dropdown/directives/if-dropdown-is-open.directive';
import { DropdownTriggerService } from '@app/shopping-cart/components/navigation-dropdown/dropdown-trigger.service';

@Component({
    selector: 'TestIfDropdownIsOpenDirective',
    template: `<div class='wrapper' *IfDropdownIsOpenDirective></div>`
})
class TestIfDropdownIsOpenDirective { }


describe('IfDropdownIsOpenDirective', () => {
    let fixture: ComponentFixture<TestIfDropdownIsOpenDirective>;
    let component: TestIfDropdownIsOpenDirective;
    let service: DropdownTriggerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestIfDropdownIsOpenDirective, IfDropdownIsOpenDirective],
            providers: [DropdownTriggerService]
        });
        fixture = TestBed.createComponent(TestIfDropdownIsOpenDirective)
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should render template if dropdown is closed', () => {

    });

    xit('should render template if dropdown is open', () => {
        fixture.detectChanges();
    });
});