import { DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input, ChangeDetectionStrategy, ContentChild, contentChild, booleanAttribute, contentChildren } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RcSesButtonDirective } from "../button/button";

@Component({
  selector: 'rc-ses-message',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'message.html',
  imports: [
    MatButtonModule,
    MatIconModule,
    RcSesButtonDirective,
  ],
  host: {
    class: 'rc-ses-element rc-ses-message'
  },
})
export class RcSesMessageComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() severity: 'default' | 'info' | 'warning' | 'error' | 'success' | null | undefined = 'default';
  @Input() theme: 'light' | 'dark' | null | undefined = 'light';

  @Input({ transform: booleanAttribute }) hideIcon: boolean = false;
  @Input({ transform: booleanAttribute }) dismissible: boolean = false;

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

  get containerClass() {
    return {
      [`rc-ses-message--severity-${this.severity}`]: this.severity,
      [`rc-ses-message--theme-${this.theme}`]: this.theme,
    };
  }
}
