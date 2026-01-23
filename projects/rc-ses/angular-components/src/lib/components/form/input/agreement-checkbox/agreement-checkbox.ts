import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, Renderer2, Input, OnChanges, SimpleChanges, OnInit, forwardRef, ViewChild, Injector, booleanAttribute } from "@angular/core";
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCommonModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'rc-ses-agreement-checkbox',
  standalone: true,
  templateUrl: 'agreement-checkbox.html',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatCheckboxModule,
    MatCommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  host: {
    class: 'rc-ses-element rc-ses-agreement-checkbox'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RcSesAgreementCheckboxComponent),
      multi: true
    }
  ]
})
export class RcSesAgreementCheckboxComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnInit, OnDestroy {
  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective | undefined;

  @Input() formControl!: FormControl;
  @Input() formControlName: string | undefined;

  @Input() description: string = '';
  @Input({ transform: booleanAttribute }) flat: boolean = false;

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

  ngOnInit() {}

  ngAfterViewInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }
}
