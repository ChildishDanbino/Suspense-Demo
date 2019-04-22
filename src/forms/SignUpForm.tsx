// @ts-ignore
import isEmpty from 'lodash/isEmpty'
import React from 'react'

// @ts-ignore
import LoginButton from '../components/LoginButton'

interface IState {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
  remember: boolean
  errors: {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
    passwordConfirmation?: string
  }
}

export class SignUpForm extends React.PureComponent<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      errors: {},
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirmation: '',
      remember: true,
    }
  }

  onInputChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    const id = currentTarget.id as Exclude<keyof IState, 'errors'>;
    const state = {
      ...this.state,
      [id]: currentTarget.value,
    };

    this.setState(state)
  };

  onCheckedChange = () => {
    this.setState({ remember: !this.state.remember })
  };

  validateForm = () => {
    const formErrors: any = {};
    const { firstName, lastName, email, password, passwordConfirmation } = this.state;

    if (!firstName) {
      formErrors.firstName = 'Please enter a first name.'
    }

    if (!lastName) {
      formErrors.lastName = 'Please enter a last name.'
    }

    if (!email) {
      formErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      formErrors.password = 'Please enter a password.'
    }

    if (!passwordConfirmation) {
      formErrors.passwordConfirmation = 'Please confirm password.'
    } else if (password && passwordConfirmation !== password) {
      formErrors.passwordConfirmation = 'Password Confirmation and Password must be the same.'
    }

    return formErrors
  };

    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors = this.validateForm();
        this.setState({errors});

        if (isEmpty(errors)) {
            console.log('CONFIRM PASSWORD FIRED');
            this.props.setLogin();
        }
    };

  onLoginClick = () => {
    this.props.setLogin()
  };

  render() {
    const {
      email,
      errors,
      firstName,
      lastName,
      password,
      passwordConfirmation,
    } = this.state;

    return (
      <div
        className="Container"
      >
        <div className="Header" data-tag_section="login-form">
          <h4 data-tid="lead-form-heading">SIGN UP</h4>
        </div>

        <form data-tid="sign-up-form" onSubmit={this.onSubmit}>
          <div className="FormWrapper">
            <div className="Row">
                <span className="Input">
                  <label htmlFor="name">First Name</label>
                  <input
                    id="firstName"
                    onChange={this.onInputChange}
                    type="text"
                    value={firstName}
                  />
                </span>
              {errors.firstName && <div className="Error">{errors.firstName}</div>}
            </div>

              <div className="Row">
                <span className="Input">
                  <label htmlFor="email">Last Name</label>
                  <input
                    data-tag_item="lastName"
                    data-tid="last-name-input"
                    id="lastName"
                    onChange={this.onInputChange}
                    type="text"
                    value={lastName}
                  />
                </span>
              {errors.lastName && <div className="Error">{errors.lastName}</div>}
            </div>

            <div className="Row">
                <span className="Input">
                  <label htmlFor="email">Email</label>
                  <input
                    data-tag_item="email"
                    data-tid="email-input"
                    id="email"
                    onChange={this.onInputChange}
                    type="email"
                    value={email}
                  />
                </span>
              {errors.email && <div className="Error">{errors.email}</div>}
            </div>

            <div className="Row">
                <span className="Input">
                  <label htmlFor="email">Password</label>
                  <input
                    data-tag_item="password"
                    data-tid="password-input"
                    id="password"
                    onChange={this.onInputChange}
                    type="password"
                    value={password}
                  />
                </span>
              {errors.password && <div className="Error">{errors.password}</div>}
            </div>

            <div className="Row">
                <span className="Input">
                  <label htmlFor="email">Confirm Password</label>
                  <input
                    data-tag_item="passwordConfirmation"
                    data-tid="password-confirm-input"
                    id="passwordConfirmation"
                    onChange={this.onInputChange}
                    type="password"
                    value={passwordConfirmation}
                  />
                </span>
              {errors.passwordConfirmation &&
              <div className="Error">{errors.passwordConfirmation}</div>}
            </div>

            <LoginButton buttonText="Sign Up"/>

            <div className='BottomWrapper'>
              <div className="StaySignedIn">
                <input
                  type="checkbox"
                  data-tag_item="checkbox"
                  checked={this.state.remember}
                  onChange={this.onCheckedChange}
                  name="remember"
                />
                <label htmlFor="remember">Stay Logged In</label>
              </div>
            </div>
          </div>
        </form>

        <p className="SignUp">
          {'Already a member?'}
          <a
            className="FooterLink"
            href="#" onClick={this.onLoginClick}>
            Login
          </a>
        </p>
      </div>
    )
  }
}

export default SignUpForm
