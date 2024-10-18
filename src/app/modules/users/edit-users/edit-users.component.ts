import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  standalone: true,
  imports: [],
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditUsersComponent {

}
