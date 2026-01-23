import { DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input } from "@angular/core";
import { Breadcrumbs } from "../../breadcrumbs/breadcrumbs";

type PathItem = { label: string, path: string };

@Component({
  selector: 'rc-ses-service-header',
  standalone: true,
  templateUrl: 'service-header.html',
  imports: [Breadcrumbs],
  host: {
    class: 'rc-ses-element rc-ses-service-header'
  },
})
export class ServiceHeader implements AfterViewInit, OnDestroy, OnInit {
  @Input() serviceName: string | undefined = undefined;
  @Input() serviceDescription: string | undefined = undefined;

  @Input() path: PathItem[] | undefined = [];

  get fullPath(): PathItem[] {
    return [
      { label: 'Savitarna', path: '/'},
      ...(this.path ?? []),
    ];
  }

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
