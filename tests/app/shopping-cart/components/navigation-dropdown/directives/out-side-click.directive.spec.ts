import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { OutSideClickDirective } from '@app/shopping-cart/components/navigation-dropdown/directives/out-side-click.directive';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'testOutSideClick',
    template: `
    <div class='outside'>
        <div (outSideClick)='clickOutSide = true'>
            <div class='inside'>inside</div>
        </div>
    </div>
    `,

})
class TestOutSideClickComponent {
    clickOutSide = false;
}

describe('OutSideClickDirective', () => {
    let fixture: ComponentFixture<TestOutSideClickComponent>;
    let component: TestOutSideClickComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestOutSideClickComponent, OutSideClickDirective],
        });
        fixture = TestBed.createComponent(TestOutSideClickComponent);
        component = fixture.componentInstance;
    });

    it('should detect click out side component', () => {
        const root = fixture.debugElement.nativeElement;
        const outside = fixture.debugElement.query(By.css('.outside'));

        outside.nativeElement.click();
        fixture.detectChanges();
        expect(component.clickOutSide).toBeTrue();
    });

    it('should ingore click on child', () => {
        const wrapper = fixture.debugElement.query(By.css('.inside'));
        wrapper.nativeElement.click();
        fixture.detectChanges();
        expect(component.clickOutSide).toBeFalse();
    });

});
