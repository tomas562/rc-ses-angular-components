import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit, Renderer2, Input, ContentChild, AfterContentInit, ViewChild } from "@angular/core";
import { ControlContainer, FormGroupDirective, FormsModule } from "@angular/forms";
import { MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RcSesInputDirective } from "../input/input/input";
import { RcSesAgreementCheckboxComponent } from "../input/agreement-checkbox/agreement-checkbox";
import { RcSesRadioButtonGroupComponent } from "../input/radio-button-group/radio-button-group";

@Component({
  selector: 'rc-ses-form-field',
  standalone: true,
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatError,
    RcSesInputDirective,
  ],
  host: {
    class: 'rc-ses-element rc-ses-form-field'
  },
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ],
})
export class RcSesFormFieldComponent implements AfterViewInit, AfterContentInit, OnDestroy, OnInit {
  @ContentChild(MatFormFieldControl) control!: MatFormFieldControl<any>;

  @ContentChild(MatFormField, { read: ElementRef}) formFieldRef!: ElementRef<MatFormField>;
  @ContentChild(MatFormField) formField!: MatFormField;

  @ContentChild(MatInput, { read: ElementRef}) inputRef!: ElementRef<MatInput>;
  @ContentChild(MatInput) input!: MatInput;

  @ContentChild(RcSesAgreementCheckboxComponent, { read: ElementRef })
  rcSesAgreementCheckboxComponent: RcSesAgreementCheckboxComponent | undefined = undefined;

  @ContentChild(RcSesRadioButtonGroupComponent, { read: ElementRef })
  rcSesRadioButtonGroupComponent: RcSesRadioButtonGroupComponent | undefined = undefined;

  @ViewChild(MatLabel, { read: ElementRef }) labelComponent: MatLabel | undefined;

  @Input() label: string | undefined = undefined;
  @Input() labelSubtitle: string | undefined = undefined;

  public initialized: boolean = false;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public _element: ElementRef,
    private _renderer: Renderer2,
  ) {}

  ngOnInit() {
    if (this.labelSubtitle)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-has-label-subtitle');
  }

  ngAfterViewInit() {}

  ngAfterContentInit(): void {
    if (this.input?.readonly) {
      this._renderer.addClass(this.formField._elementRef.nativeElement, 'mat-form-field-readonly');
      this._renderer.addClass(this.formFieldRef.nativeElement, 'mat-form-field--readonly');
    }

    if (this.rcSesAgreementCheckboxComponent)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-form-field--contains--agreement-checkbox-component');

    if (this.rcSesRadioButtonGroupComponent)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-form-field--contains--radio-button-group-component');

    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
