import { DOCUMENT } from "@angular/common";
import { Directive, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input } from "@angular/core";

@Directive({
  selector: '[rc-ses-accordion]',
  standalone: true,
  host: {
    class: 'rc-ses-element rc-ses-accordion'
  },
})
export class RcSesAccordionDirective implements AfterViewInit, OnDestroy, OnInit {
  @Input() path: { label: string, path: string }[] = [];

  public initialized: boolean | undefined;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public _el: ElementRef,
    private _renderer: Renderer2,
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
