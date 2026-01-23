import { DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input } from "@angular/core";
import { Breadcrumbs } from "../../breadcrumbs/breadcrumbs";

@Component({
  selector: 'rc-ses-service-page',
  standalone: true,
  templateUrl: 'service-page.html',
  imports: [Breadcrumbs],
  host: {
    class: 'rc-ses-element rc-ses-service-page'
  },
})
export class ServicePage implements AfterViewInit, OnDestroy, OnInit {
  @Input() serviceName: string | undefined = undefined;
  @Input() serviceDescription: string | undefined = undefined;

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
