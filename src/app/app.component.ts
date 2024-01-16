import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CitizenComplaintComponent } from './citizen-complaint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CitizenComplaintComponent],
  template: `
    <app-citizen-complaint />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
