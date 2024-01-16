import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  CitizenComplaintRecord,
  citizenComplaintDefaultValue,
  CitizenComplaintMetadata,
} from './citizen-complaint.model';

@Component({
  selector: 'app-citizen-complaint-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form>
      <button type="submit">Submit</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitizenComplaintFormComponent {
  model: CitizenComplaintRecord = citizenComplaintDefaultValue;
  citizenComplaintMetadata = CitizenComplaintMetadata;

  async onSubmit() {
  }
}
