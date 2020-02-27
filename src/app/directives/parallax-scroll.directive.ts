import { Directive, Input, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appParallaxScroll]'
})
export class ParallaxScrollDirective implements AfterViewInit {

  @Input('startingPosition') startingPosition: number;
  @Input('ratio') parallaxRatio : number = 1
  private initialTop: number = 0;

  constructor(private eleRef : ElementRef) {
  }
  
  ngAfterViewInit() {
    this.initialTop = this.startingPosition;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event){
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}
