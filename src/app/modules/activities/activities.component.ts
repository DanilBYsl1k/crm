import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesComponent {

}
