import { DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

@NgModule({
  imports: [
    MatIconModule,
    MatIconModule,
  ],
})
export class RcSesIconsModule {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIconLiteral(
      'rc-ses-arrow-right',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1F2733" d="m20.78 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H3.75a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.748.748 0 0 1 0 1.061Z"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-caret-left',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#0E6790" d="M10.354 12.646a.501.501 0 0 1-.707.708l-5-5a.5.5 0 0 1 0-.707l5-5a.5.5 0 1 1 .707.707L5.707 8l4.647 4.646Z"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-circle',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1f2733"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-check-circle',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#00a879"/><path fill="#fff" d="m18.533 9.03-8 8a.751.751 0 0 1-1.063 0l-3.5-3.5a.751.751 0 1 1 1.063-1.062l2.969 2.97 7.47-7.469a.751.751 0 0 1 1.062 1.063l-.001-.002Z"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-check-circle-fill',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm4.28 8.03-5.25 5.25a.747.747 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-info-fill',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm-.375 4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Zm1.125 10.5a1.5 1.5 0 0 1-1.5-1.5V12a.75.75 0 1 1 0-1.5 1.5 1.5 0 0 1 1.5 1.5v3.75a.75.75 0 1 1 0 1.5Z"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-scroll',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M9 9.75A.75.75 0 0 1 9.75 9h6a.75.75 0 1 1 0 1.5h-6A.75.75 0 0 1 9 9.75Zm.75 3.75h6a.75.75 0 1 0 0-1.5h-6a.75.75 0 1 0 0 1.5Zm12 4.5a3 3 0 0 1-3 3H8.25a3 3 0 0 1-3-3V6a1.5 1.5 0 0 0-3 0c0 .538.453.902.458.906A.75.75 0 0 1 1.8 8.099C1.692 8.02.75 7.276.75 6a3 3 0 0 1 3-3H16.5a3 3 0 0 1 3 3v9.75h.75a.75.75 0 0 1 .45.15c.113.08 1.05.824 1.05 2.1ZM9.024 16.264a.757.757 0 0 1 .726-.514H18V6a1.5 1.5 0 0 0-1.5-1.5H6.346c.265.455.405.973.404 1.5v12a1.5 1.5 0 0 0 3 0c0-.538-.453-.902-.457-.906a.733.733 0 0 1-.269-.83ZM20.25 18a1.18 1.18 0 0 0-.303-.75h-8.812c.075.243.113.496.113.75 0 .527-.138 1.044-.402 1.5h7.904a1.5 1.5 0 0 0 1.5-1.5Z"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-warning-diamond-fill',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m22.064 10.942-9.005-9.006a1.5 1.5 0 0 0-2.115 0l-9 9.006a1.5 1.5 0 0 0 0 2.115l9.005 9.005a1.5 1.5 0 0 0 2.115 0l9.004-9.005a1.5 1.5 0 0 0 0-2.115h-.004ZM11.25 7.499a.75.75 0 1 1 1.5 0v5.25a.75.75 0 1 1-1.5 0V7.5Zm.75 9.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Z"/></svg>`)
    );

    iconRegistry.addSvgIconLiteral(
      'rc-ses-warning-fill',
      sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M22.201 17.634 14.003 3.396a2.322 2.322 0 0 0-4.004 0L1.801 17.634a2.204 2.204 0 0 0 0 2.223A2.282 2.282 0 0 0 3.803 21h16.396a2.284 2.284 0 0 0 2-1.143 2.205 2.205 0 0 0 .002-2.223ZM11.251 9.75a.75.75 0 1 1 1.5 0v3.75a.75.75 0 0 1-1.5 0V9.75Zm.75 8.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Z"/></svg>`)
    );
  }
}
