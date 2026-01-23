import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { RcSesButtonDirective } from '../../../../rc-ses/angular-components/src/lib/components/button/button';
import { ServiceHeader } from '../../../../rc-ses/angular-components/src/lib/components/layout/service-header/service-header';
import { ServicePage } from '../../../../rc-ses/angular-components/src/lib/components/layout/service-page/service-page';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RcSesIconsModule } from '../../../../rc-ses/angular-components/src/lib/components/icons/icons.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,

    MatButtonModule,
    MatIconModule,

    RcSesButtonDirective,
    RcSesIconsModule,

    ServiceHeader,
    ServicePage,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
  providers: [
    HttpClient,
  ],
})
export class LandingPageComponent  {

}
