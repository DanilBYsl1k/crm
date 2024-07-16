import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { JsonPipe } from "@angular/common";

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackBarComponent {


  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { error: Error }) {
  }
}
