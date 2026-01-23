import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, Renderer2, Input, ContentChildren, QueryList, ChangeDetectorRef, model, OnChanges, SimpleChanges, OnInit, forwardRef, ViewChild, Injector, booleanAttribute } from "@angular/core";
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCommonModule, MatOption, MatOptionModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

type Option = { value: string, label: string, description?: string };
type Options = Option[];

@Component({
  selector: 'rc-ses-select',
  standalone: true,
  templateUrl: 'select.html',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatCommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
  ],
  host: {
    class: 'rc-ses-element rc-ses-select'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RcSesSelectComponent),
      multi: true
    }
  ]
})
export class RcSesSelectComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnInit, OnDestroy {
  @ContentChildren(MatOption)
  queryOptions!: QueryList<MatOption>;

  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective | undefined;

  @Input() formControl!: FormControl;
  @Input() formControlName: string | undefined;

  @Input() options!: Options;

  @Input({ transform: booleanAttribute }) multiple: boolean = false;
  @Input({ transform: booleanAttribute }) searchable: boolean | '' = false;
  @Input() panelWidth: 'auto' | 'dynamic' | null = 'auto';
  @Input() placeholder: string = '';

  filteredOptions: Options = [];

  initialized: boolean = false;

  readonly selectAll = model(false);

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

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredOptions = changes['options'].currentValue
      ? changes['options'].currentValue
      : []
  }

  ngOnInit() {
    if (this.searchable)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-select-searchable');

    if (this.multiple)
      this._renderer.addClass(this._element.nativeElement, 'rc-ses-select-multiple');
  }

  ngAfterViewInit() {
    this.initialized = true;
  }

  ngOnDestroy() {
    this.initialized = false;
  }

  filterOptions = ($event: KeyboardEvent) => {
    $event.stopPropagation();
    const query = ($event.target as HTMLInputElement).value;

    this.filteredOptions = !query?.length
      ? this.options
      : this.options.filter((o) => o.label.indexOf(query) !== -1);
  }

  handleSelectAllChange = (checked: boolean) => {
    const filteredOptionValues: Option['value'][] = this.filteredOptions.map((o) => o.value) || [];

    if (checked) {
      this.control.setValue(filteredOptionValues)
    } else {
      const currentSelection: Option['value'][] = this.control.value || [];
      this.control.setValue(currentSelection.filter((c) => !filteredOptionValues.includes(c)))
    }
  }

  isFullSelection = () => {
    const currentSelection: Option['value'][] = this.control.value || [];

    if (this.filteredOptions.length === 0 || currentSelection.length === 0)
      return false;

    return this.filteredOptions.every((o) => currentSelection.includes(o.value));
  }

  isPartialSelection = () => {
    if (!this.filteredOptions.length || !this.control.value.length)
      return false;

    const currentSelection: Option['value'][] = this.control.value || [];
    return !this.isFullSelection() && this.filteredOptions.some((o) => currentSelection.includes(o.value));
  }
}
