import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DragDropDirective } from "@shared/directive/drag-drop.directive";
import { InputFileComponent } from "@shared/components/input-file/input-file.component";
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-add-users',
  standalone: true,
  imports: [
    DragDropDirective,
    InputFileComponent,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUsersComponent implements OnInit {
  form: FormGroup<any>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
  }
}
