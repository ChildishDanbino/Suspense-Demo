// @ts-ignore
import isEmpty from 'lodash/isEmpty'
import React from 'react'

// @ts-ignore
import LoginButton from '../components/LoginButton'

interface IProps {
  setLogin: () => void
  showResetSent: (resetEmailSent: boolean) => {}
}

interface IState {
  email: string
  errors: {
    email?: string
  }
}

export class ResetPasswordForm extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      errors: {}
    }
  }

  onEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value })
  };

  validateForm = () => {
    const formErrors: any = {};
    const { email } = this.state;
    if (!email) {
      formErrors.email = 'Please enter a valid email address.'
    }

    return formErrors
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const errors = this.validateForm();
    this.setState({ errors });

    if (isEmpty(errors)) {
      console.log('RESET PASSWORD FIRED');
      this.props.setLogin();
    }
  };

  renderSuccess = () => {
    return <div className="SubHeader">
      A password reset email will be sent to you.
    </div>
  };

  renderForm = () => {
    const { errors, email } = this.state;

    return (
      <form data-tid="reset-password-form" onSubmit={this.onSubmit}>
        <div className="Row">
                <span className="Input">
                  <label htmlFor="email">Email</label>
                  <input
                    data-tag_item="email"
                    data-tid="email-input"
                    id="email"
                    onChange={this.onEmailChanged}
                    type="text"
                    value={email}
                  />
                </span>
          {errors.email && <div className="Error">{errors.email}</div>}
        </div>
        <LoginButton buttonText="Submit" />
      </form>
    )
  };

  render() {
    return (
      <div
        className="Container"
      >
        <div className="Header">
          <h4>RESET PASSWORD</h4>
        </div>
        {this.renderForm()}
      </div>
    )
  }
}

export default ResetPasswordForm
