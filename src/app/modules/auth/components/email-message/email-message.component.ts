import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-email-message',
  standalone: true,
  imports: [],
  templateUrl: './email-message.component.html',
  styleUrl: './email-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailMessageComponent {

}
