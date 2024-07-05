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

export interface IAuth {
  email: string;
  password: string;
}

export interface IRegister extends IAuth {
  repeatPassword: string;
  company: string;
}

export interface ILogin extends IAuth {
  remember: boolean;
}
