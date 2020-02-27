import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appParallaxScroll]'
})
export class ParallaxScrollDirective {

  @Input('startingPosition') startingPosition: number;
  @Input('ratio') parallaxRatio: number;
  private initialTop: number;

  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event){
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
  }

}
