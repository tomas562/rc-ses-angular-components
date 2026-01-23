import { Component } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: 'rc-ses-divider',
  standalone: true,
  imports: [
    MatDividerModule,
  ],
  host: {
    class: 'rc-ses-element rc-ses-divider',
  },
  template: `<mat-divider />`,
})
export class RcSesDividerComponent {
}
