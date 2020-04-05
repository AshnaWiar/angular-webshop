import { TestBed } from '@angular/core/testing';
import { DropdownTriggerService } from '@app/shopping-cart/components/navigation-dropdown/dropdown-trigger.service';

describe('DropdownService', () => {
    let dropdownService: DropdownTriggerService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[DropdownTriggerService]
        })
        dropdownService = TestBed.inject(DropdownTriggerService);
    });

    it('should be created', () => {
        expect(dropdownService).toBeTruthy();
    });
    
    it('should emit click events', () => {
        spyOn(dropdownService.getEventEmitter(), 'emit');
        dropdownService.setIsOpen(true);
        expect(dropdownService.getEventEmitter().emit).toHaveBeenCalled();
        expect(dropdownService.getEventEmitter().emit).toHaveBeenCalledWith(true);
    });

    
});

