import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DropdownTriggerService {

  private eventEmitter: EventEmitter<boolean>;
  private _isOpen: boolean;
  
  constructor() {
    this.eventEmitter = new EventEmitter();
    this._isOpen = false;
  }

  toggle() {
    this.setIsOpen(!this._isOpen);
  }

  setIsOpen(value: boolean) {
    if(value === this._isOpen){
      return
    }
    this._isOpen = value;
    this.eventEmitter.emit(this._isOpen);
  }

  isOpen() {
    return this._isOpen;
  }

  getEventEmitter(): EventEmitter<boolean> {
    return this.eventEmitter;
  }

  onToggle(): Observable<boolean> {
    return this.eventEmitter.asObservable();
  }

  getDropdownState(){
    return this._isOpen;
  }

}
