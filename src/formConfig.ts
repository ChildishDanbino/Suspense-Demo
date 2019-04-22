interface IFormConfig {
  [key: string]: Promise<any>
}

export const formConfig: IFormConfig = {
  confirm: import('../src/forms/ConfirmPasswordForm'),
  login: import('../src/forms/LoginForm'),
  reset: import('../src/forms/ResetPasswordForm'),
  signUp: import('../src/forms/SignUpForm'),
};
