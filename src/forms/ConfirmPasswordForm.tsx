// @ts-ignore
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import '../App.scss';

// @ts-ignore
import { generateError } from 'apps/shared/User'
import LoginButton from '../components/LoginButton'

interface IProps {
  resetToken: string | null
  setLogin: () => void
}

interface IState {
  password: string
  passwordConfirmation: string
  errors: {
    password?: string
    passwordConfirmation?: string
  }
}

export class ConfirmPasswordForm extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      errors: {},
      password: '',
      passwordConfirmation: '',
    }
  }

  onInputChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    const id = currentTarget.id as Exclude<keyof IState, 'errors'>
    const state = {
      ...this.state,
      [id]: currentTarget.value,
    };

    this.setState(state)
  };

  validateForm = () => {
    const formErrors: any = {};
    const { password, passwordConfirmation } = this.state;

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
    this.setState({ errors });

    if (isEmpty(errors)) {
      console.log('CONFIRM PASSWORD FIRED');
      this.props.setLogin();
    }
  };

  render() {
    const { errors, password, passwordConfirmation } = this.state;

    return (
      <div
        className="Container"
      >
        <div className="Header">
          <h4>CONFIRM PASSWORD</h4>
        </div>

        <form onSubmit={this.onSubmit}>
          <div className="Row">
                <span className="Input">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    data-tag_item="password"
                    onChange={this.onInputChange}
                  />
                </span>
            {errors.password && <div className="Error">{errors.password}</div>}
          </div>
          <div className="Row">
                <span className="Input">
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    data-tag_item="passwordConfirmation"
                    onChange={this.onInputChange}
                  />
                </span>
            {errors.passwordConfirmation && <div className="Error">{errors.passwordConfirmation}</div>}
          </div>
          <LoginButton buttonText="Submit" />
        </form>
      </div>
    )
  }
}

export default ConfirmPasswordForm;
