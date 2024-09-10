import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

import { AllowedFileTypesEnum } from "@shared/enums/allowed-file-types.enum";

export class ValidationFunctions {
  public static comparePassword(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(controlName);
      const confirmPasswordControl = formGroup.get(matchingControlName);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }

      return null;
    };
  }

  public static imageType(allowedTypes: AllowedFileTypesEnum[]): ValidatorFn {
    return (control: AbstractControl<File>): ValidationErrors | null => {
      const file = control.value;

      if (file) {
        const fileType = file.type as AllowedFileTypesEnum;
        if (allowedTypes.includes(fileType)) {
          return null
        }

        return { allowedFile: true }
      }

      return null;
    }

  }
}
