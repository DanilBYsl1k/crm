import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-users',
  standalone: true,
  imports: [],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUsersComponent {

}
