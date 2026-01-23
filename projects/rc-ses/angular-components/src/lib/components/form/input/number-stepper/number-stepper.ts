import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, Renderer2, Input, OnChanges, SimpleChanges, OnInit, forwardRef, ViewChild, Injector, booleanAttribute } from "@angular/core";
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCommonModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'rc-ses-number-stepper',
  standalone: true,
  templateUrl: 'number-stepper.html',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  host: {
    class: 'rc-ses-element rc-ses-number-stepper'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RcSesNumberStepperComponent),
      multi: true
    }
  ]
})
export class RcSesNumberStepperComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnInit, OnDestroy {
  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective | undefined;

  @Input() formControl!: FormControl;
  @Input() formControlName: string | undefined;

  @Input() max: number = Number.MAX_SAFE_INTEGER;
  @Input() min: number = 0;
  @Input() placeholder: string = '';
  @Input() step: number = 1;

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

  add = () => this.control.setValue(
    Math.min(this.max, (Math.max(this.min, Math.min(this.max, this.control.value)) ?? 0) + this.step)
  );

  subtract = () => this.control.setValue(
    Math.max(this.min, (Math.min(this.max, Math.max(this.min, this.control.value)) ?? 0) - this.step)
  );

  canAdd = () => !this.control.value || (this.max > this.control.value);

  canSubtract = () => !this.control.value || (this.control.value > this.min);
}
