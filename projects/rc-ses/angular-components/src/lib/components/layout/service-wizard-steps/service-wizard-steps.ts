import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input } from "@angular/core";
import { MatCommonModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RcSesIconsModule } from "../../icons/icons.module";
import { HttpClient } from "@angular/common/http";
// import { MatCommonModule } from "@angular/material/core";

@Component({
  selector: 'rc-ses-service-wizard-steps',
  standalone: true,
  templateUrl: 'service-wizard-steps.html',
  imports: [MatIconModule, MatListModule, RcSesIconsModule],
  host: {
    class: 'rc-ses-element rc-ses-service-wizard-steps'
  },
})
export class ServiceWizardSteps implements AfterViewInit, OnDestroy, OnInit {
  @Input() steps: { label: string, state: 'completed' | 'active' | 'pending' }[] = [];

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
