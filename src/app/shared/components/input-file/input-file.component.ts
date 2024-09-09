import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-input-file',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFileComponent),
      multi: true
    }
  ]
})
export class InputFileComponent implements ControlValueAccessor {

  onChange: (value: File | null) => void = () => {
  };
  onTouched: () => void = () => {
  };

  registerOnChange(fn: () => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  writeValue(val: any): void {
    this.onChange(val)
  }

  uploadImg({ target }: any) {
    if (target.files && target.files.length > 0) {
      const files = target.files;
      const firstFile = files[0];

      this.onChange(firstFile)
    } else {
      this.onChange(null);
    }
  }
}
