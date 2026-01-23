import { DOCUMENT } from "@angular/common";
import { Directive, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input } from "@angular/core";

@Directive({
  selector: '[rc-ses-button]',
  standalone: true,
  host: {
    class: 'rc-ses-element rc-ses-button'
  },
})
export class RcSesButtonDirective implements AfterViewInit, OnDestroy, OnInit {
  @Input() color: "primary" | "secondary" | "neutral" | "dark" | "danger" = "primary";

  public initialized: boolean | undefined;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public _el: ElementRef,
    private _renderer: Renderer2,
  ) {}

  ngOnInit() {
    this._renderer.removeAttribute(this._el.nativeElement, 'mat-ripple-loader-class-name');
    this._renderer.removeAttribute(this._el.nativeElement, 'mat-ripple-loader-uninitialized');
  }

  ngAfterViewInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
