import { DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, contentChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatAccordion } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { RcSesButtonDirective } from "../../button/button";

@Component({
  selector: 'rc-ses-service-form-actions',
  standalone: true,
  templateUrl: 'service-form-actions.html',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RcSesButtonDirective,
  ],
  host: {
    class: 'rc-ses-element rc-ses-service-form-actions'
  },
})
export class ServiceFormActions implements AfterViewInit, OnDestroy, OnInit {
  public readonly accordion = contentChild.required(MatAccordion);

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
