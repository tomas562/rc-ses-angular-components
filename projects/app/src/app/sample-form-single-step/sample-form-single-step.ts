import { Component,  viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { RcSesAccordionDirective } from '../../../../rc-ses/angular-components/src/lib/components/accordion/accordion';
import { RcSesButtonDirective } from '../../../../rc-ses/angular-components/src/lib/components/button/button';
import { RcSesFormFieldComponent } from '../../../../rc-ses/angular-components/src/lib/components/form/form-field/form-field';
import { RcSesInputDirective } from '../../../../rc-ses/angular-components/src/lib/components/form/input/input/input';
import { ServiceFormContainer } from '../../../../rc-ses/angular-components/src/lib/components/layout/service-form-container/service-form-container';
import { ServiceHeader } from '../../../../rc-ses/angular-components/src/lib/components/layout/service-header/service-header';
import { ServicePage } from '../../../../rc-ses/angular-components/src/lib/components/layout/service-page/service-page';
import { ServiceWizardSteps } from '../../../../rc-ses/angular-components/src/lib/components/layout/service-wizard-steps/service-wizard-steps';
import { RcSesSelectComponent } from '../../../../rc-ses/angular-components/src/lib/components/form/input/select/select';
import { RcSesNumberStepperComponent } from '../../../../rc-ses/angular-components/src/lib/components/form/input/number-stepper/number-stepper';
import { RcSesAgreementCheckboxComponent } from '../../../../rc-ses/angular-components/src/lib/components/form/input/agreement-checkbox/agreement-checkbox';
import { RcSesMessageComponent } from '../../../../rc-ses/angular-components/src/lib/components/message/message';
import { RcSesRadioButtonGroupComponent } from '../../../../rc-ses/angular-components/src/lib/components/form/input/radio-button-group/radio-button-group';
import { RcSesIconsModule } from '../../../../rc-ses/angular-components/src/lib/components/icons/icons.module';
import { MatDividerModule } from '@angular/material/divider';
import { RcSesDividerComponent } from '../../../../rc-ses/angular-components/src/lib/components/divider/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'sample-form-single-step',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,

    MatButtonModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,

    RcSesAccordionDirective,
    RcSesAgreementCheckboxComponent,
    RcSesButtonDirective,
    RcSesDividerComponent,
    RcSesFormFieldComponent,
    RcSesIconsModule,
    RcSesInputDirective,
    RcSesMessageComponent,
    RcSesNumberStepperComponent,
    RcSesRadioButtonGroupComponent,
    RcSesSelectComponent,

    ServiceHeader,
    ServicePage,
    ServiceWizardSteps,
    ServiceFormContainer,
  ],
  templateUrl: './sample-form-single-step.html',
  styleUrl: './sample-form-single-step.scss',
  providers: [
    HttpClient,
    provideNativeDateAdapter(),
  ],
})
export class SampleFormSingleStepComponent {
  accordion = viewChild.required(MatAccordion);

  form = new FormGroup({
    text: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    selection: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    // phoneNo: new FormControl(
    //   { value: '', disabled: false },
    //   { validators: Validators.required },
    // ),
    // searchable: new FormControl(
    //   { value: false, disabled: false },
    //   { validators: Validators.required },
    // ),
    date: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    // dateRange: new FormControl(
    //   { value: '', disabled: false },
    //   { validators: Validators.required },
    // ),
    integer: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    agreement: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    radioSelect1: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    radioSelect2: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    radioSelect3: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
  });

  selectionOptions: { value: string, label: string, description?: string }[] = [
    { value: 'lvivo-g-7', label: 'Lvivo g. 7', description: 'Vilnius, Vilniaus m. sav. 09313' },
    { value: 'lvivo-g-9', label: 'Lvivo g. 9', description: 'Vilnius, Vilniaus m. sav. 09313' },
    { value: 'lvivo-g-11', label: 'Lvivo g. 11', description: 'Vilnius, Vilniaus m. sav. 09313' },
    { value: 'lvivo-g-11a', label: 'Lvivo g. 11A', description: 'Vilnius, Vilniaus m. sav. 09313' },
    { value: 'lvivo-g-12', label: 'Lvivo g. 12', description: 'Vilnius, Vilniaus m. sav. 09313' },
    { value: 'lvivo-g-13', label: 'Lvivo g. 13', description: 'Vilnius, Vilniaus m. sav. 09313' },
    { value: 'lvivo-g-13a', label: 'Lvivo g. 13A', description: 'Vilnius, Vilniaus m. sav. 09313' },
    { value: 'lvivo-g-13b', label: 'Lvivo g. 13B', description: 'Vilnius, Vilniaus m. sav. 09313' },
    { value: 'lvivo-g-1c', label: 'Lvivo g. 13C', description: 'Vilnius, Vilniaus m. sav. 09313' },
  ];

  radioOptions: { value: string, label: string }[] = [
    { label: 'Pasirinkimas #1', value: 'value1' },
    { label: 'Pasirinkimas #2', value: 'value2' },
    { label: 'Pasirinkimas #3', value: 'value3' },
  ];
}
