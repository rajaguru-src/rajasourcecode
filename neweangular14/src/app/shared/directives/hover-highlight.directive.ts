import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onEnter(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = 'black';
  }
  @HostListener('mouseleave') onLeave(){
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.color = 'white';
  }
}
