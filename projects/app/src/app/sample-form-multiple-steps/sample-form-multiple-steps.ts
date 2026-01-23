import { Component,  viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
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
import { MatSelectModule } from '@angular/material/select';
import { RcSesSelectComponent } from '../../../../rc-ses/angular-components/src/lib/components/form/input/select/select';
import { RcSesNumberStepperComponent } from '../../../../rc-ses/angular-components/src/lib/components/form/input/number-stepper/number-stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RcSesAgreementCheckboxComponent } from '../../../../rc-ses/angular-components/src/lib/components/form/input/agreement-checkbox/agreement-checkbox';
import { RcSesMessageComponent } from '../../../../rc-ses/angular-components/src/lib/components/message/message';
import { RcSesRadioButtonGroupComponent } from '../../../../rc-ses/angular-components/src/lib/components/form/input/radio-button-group/radio-button-group';
import { RcSesIconsModule } from '../../../../rc-ses/angular-components/src/lib/components/icons/icons.module';

@Component({
  selector: 'sample-form-multiple-steps',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,

    MatButtonModule,
    MatCommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    RcSesAccordionDirective,
    RcSesAgreementCheckboxComponent,
    RcSesButtonDirective,
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
  templateUrl: './sample-form-multiple-steps.html',
  styleUrl: './sample-form-multiple-steps.scss',
  providers: [
    HttpClient,
  ],
})
export class SampleFormMultipleStepsComponent {
  accordion = viewChild.required(MatAccordion);

  /*
   * PASLAUGOS UŽSAKYMAS
   */
  formStep1 = new FormGroup({
    purpose: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    legalBasis: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    propertyAddress: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    agreement: new FormControl(
      { value: false, disabled: false },
      { validators: Validators.required },
    ),
    deadline: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    numberOfCopies: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
  });

  purposeOptions: { value: string, label: string, description?: string }[] = [
    { value: 'tikslas1', label: 'Tikslas 1' },
    { value: 'tikslas2', label: 'Tikslas 2' },
    { value: 'tikslas3', label: 'Tikslas 3' },
  ];

  legalBasisOptions: { value: string, label: string, description?: string }[] = [
    { value: 'teisinisPagrindas1', label: 'Teisinis pagrindas 1' },
    { value: 'teisinisPagrindas2', label: 'Teisinis pagrindas 2' },
    { value: 'teisinisPagrindas3', label: 'Teisinis pagrindas 3' },
  ];

  deadlineOptions: { value: string, label: string, description?: string }[] = [
    { value: 'terminas-1', label: 'artimiausiu metu' },
    { value: 'terminas-2', label: 'iki mėnesio pabaigos' },
  ];

  propertyAddressOptions: { value: string, label: string, description?: string }[] = [
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

  purposeOptionsWithDescription: { value: string, label: string, description?: string }[] = [
    { value: 'tikslas1', label: 'Tikslas 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { value: 'tikslas2', label: 'Tikslas 2', description: 'Lorem Ipsum is simply dummy text.' },
    { value: 'tikslas3', label: 'Tikslas 3', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
  ];

  purposeGroups: { name: string, disabled: boolean, items: { value: string, label: string, description?: string }[] }[] = [
    {
      name: 'Grupė 1',
      disabled: false,
      items: [
        { value: 'tikslas1', label: 'Tikslas 1' },
        { value: 'tikslas2', label: 'Tikslas 2' },
        { value: 'tikslas3', label: 'Tikslas 3' },
      ],
    },
    {
      name: 'Grupė 2',
      disabled: false,
      items: [
        { value: 'tikslas4', label: 'Tikslas 4' },
        { value: 'tikslas5', label: 'Tikslas 5' },
        { value: 'tikslas6', label: 'Tikslas 6' },
      ],
    },
  ];

  /*
   * IŠDAVIMAS
   */
  formStep2 = new FormGroup({
    issueMethod: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
    rcBranch: new FormControl(
      { value: '', disabled: false },
      { validators: Validators.required },
    ),
  });

  rcBranchOptions: { value: string, label: string, description?: string }[] = [
    {
      label: 'Lvivo g. 25-101',
      value: 'vilnius',
      description: '09320 Vilnius',
    },
    {
      label: 'E. Ožeškienės g. 12',
      value: 'kaunas',
      description: '44252 Kaunas, (įėjimas iš L. Sapiegos gatvės pusės)',
    },
    {
      label: 'Baltijos pr. 123-1',
      value: 'klaipeda',
      description: '93224 Klaipėda',
    },
    {
      label: 'Baltijos pr. 123-1',
      value: 'siauliai',
      description: '78167 Šiauliai',
    },
    {
      label: 'Baltijos pr. 123-1',
      value: 'panevezys',
      description: '35173 Panevėžys',
    },
  ];

  issueMethodOptions: { value: string, label: string }[] = [
    { label: 'El. paštu', value: 'email' },
    { label: 'Padalinyje', value: 'branch' },
    { label: 'Paštu Lietuvoje', value: 'mail-local' },
    { label: 'Paštu užsienyje', value: 'mail-abroad' },
  ];

  /*
   * REIKALINGOS PAPILDOMOS PASLAUGOS
   */
  formStep3 = new FormGroup({
    additionalServices: new FormControl(
      { value: 'Papildoma paslauga #1', disabled: true },
    ),
  });

  /*
   * TERMINAI IR SĄLYGOS
   */
  formStep4 = new FormGroup({
    termsAndConditionsAgreement: new FormControl(
      { value: false, disabled: false },
    ),
  });
}
