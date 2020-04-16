import { Directive, ElementRef, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[outSideClick]'
})
export class OutSideClickDirective {

  constructor(private el: ElementRef) { }

  @Output('outSideClick')
  public outSideClick = new EventEmitter()

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: EventTarget) {

    if(target === this.el.nativeElement || this.el.nativeElement.contains(target)){
      return
    }
    

    this.outSideClick.emit(target);
  }

}

