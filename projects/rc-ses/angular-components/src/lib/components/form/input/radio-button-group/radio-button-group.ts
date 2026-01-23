import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, Renderer2, Input, ContentChildren, QueryList, OnChanges, SimpleChanges, OnInit, forwardRef, ViewChild, Injector, booleanAttribute } from "@angular/core";
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCommonModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioButton, MatRadioModule } from "@angular/material/radio";
import { RcSesButtonDirective } from "../../../button/button";

type Option = { value: string, label: string };
type Options = Option[];

@Component({
  selector: 'rc-ses-radio-button-group',
  standalone: true,
  templateUrl: 'radio-button-group.html',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatRadioModule,

    RcSesButtonDirective,
  ],
  host: {
    class: 'rc-ses-element rc-ses-radio-button-group'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RcSesRadioButtonGroupComponent),
      multi: true
    }
  ]
})
export class RcSesRadioButtonGroupComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnInit, OnDestroy {
  @ContentChildren(MatRadioButton)
  queryOptions!: QueryList<MatRadioButton>;

  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective | undefined;

  @Input() formControl!: FormControl;
  @Input() formControlName: string | undefined;
  @Input() options!: Options;

  @Input({ transform: booleanAttribute }) displayAsButtons: boolean = false;
  @Input({ transform: booleanAttribute }) hasBackground: boolean = false;

  initialized: boolean = false;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public _element: ElementRef,
    private _renderer: Renderer2,
    private injector: Injector,
  ) {}

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  get control() {
    return this.formControl ||
      (this.formControlName && this.controlContainer.control?.get(this.formControlName));
  }

  writeValue(obj: any): void {
    this.formControlDirective?.valueAccessor?.writeValue(obj);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnChange(fn);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn);
  }

  ngOnChanges(_changes: SimpleChanges): void {}

  ngOnInit() {
    if (this.displayAsButtons)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-radio-button-group--radio-as-buttons');

    if (this.hasBackground)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-radio-button-group--has-background');
  }

  ngAfterViewInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
