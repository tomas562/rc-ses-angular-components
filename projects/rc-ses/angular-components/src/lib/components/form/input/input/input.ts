import { DOCUMENT } from "@angular/common";
import { Directive, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[rc-ses-input]',
  standalone: true,
  host: {
    class: 'rc-ses-element rc-ses-input'
  },
})
export class RcSesInputDirective implements AfterViewInit, OnDestroy, OnInit {
  public initialized: boolean | undefined;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public _el: ElementRef,
    private _renderer: Renderer2,
  ) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
