import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent : () => import('./landing-page/landing-page').then(m => m.LandingPageComponent),
  },
  {
    path: 'sample-form-multiple-steps',
    loadComponent : () => import('./sample-form-multiple-steps/sample-form-multiple-steps').then(m => m.SampleFormMultipleStepsComponent),
  },
  {
    path: 'sample-form-single-step',
    loadComponent : () => import('./sample-form-single-step/sample-form-single-step').then(m => m.SampleFormSingleStepComponent),
  },
];
