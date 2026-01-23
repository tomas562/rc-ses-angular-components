import { DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'rc-ses-breadcrumbs',
  standalone: true,
  templateUrl: 'breadcrumbs.html',
  imports: [
    RouterLink,
    MatListModule,
  ],
  host: {
    class: 'rc-ses-element rc-ses-breadcrumbs'
  },
})
export class Breadcrumbs implements AfterViewInit, OnDestroy, OnInit {
  @Input() path: { label: string, path: string }[] = [];

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
