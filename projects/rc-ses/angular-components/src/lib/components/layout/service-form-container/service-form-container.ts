import { DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, contentChild, input, Input, booleanAttribute } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatAccordion } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { ServiceFormActions } from "../service-form-actions/service-form-actions";

@Component({
  selector: 'rc-ses-service-form-container',
  standalone: true,
  templateUrl: 'service-form-container.html',
  imports: [
    MatButtonModule,
    MatIconModule,
    ServiceFormActions,
  ],
  host: {
    class: 'rc-ses-element rc-ses-service-form-container'
  },
})
export class ServiceFormContainer implements AfterViewInit, OnDestroy, OnInit {
  @Input({ transform: booleanAttribute }) canCollapse: boolean = true;

  public readonly accordion = contentChild.required(MatAccordion);

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
