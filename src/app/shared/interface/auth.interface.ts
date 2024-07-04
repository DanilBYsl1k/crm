import { FormControl } from "@angular/forms";

export interface IAuthForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface IRegisterForm extends IAuthForm {
  repeatPassword: FormControl<string | null>;
  company: FormControl<string | null>;
}

export interface ILoginForm extends IAuthForm {
  remember: FormControl<boolean | null>;
}
