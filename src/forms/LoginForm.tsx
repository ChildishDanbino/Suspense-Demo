// @ts-ignore
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import '../App.scss';

import LoginButton from '../components/LoginButton'

interface IProps {
    theme: { [key: string]: string }
    userSessionId: string
    setSignUp: () => void
    setReset: () => void
    loginUser: (state: IState) => void
}

interface IState {
    email: string
    password: string
    remember: boolean
    errors: {
        email?: string
        password?: string
    }
}

export class LoginForm extends React.PureComponent<IProps, IState> {
    static defaultProps: Partial<IProps> = {
        theme: {},
    };

    constructor(props: IProps) {
        super(props);
        this.state = {
            email: '',
            errors: {},
            password: '',
            remember: true,
        }
    }

    onInputChange = ({currentTarget}: React.ChangeEvent<HTMLInputElement>) => {
        const id = currentTarget.id as Exclude<keyof IState, 'errors'>
        const state = {
            ...this.state,
            [id]: currentTarget.value
        };

        this.setState(state)
    };

    onCheckedChange = () => {
        this.setState({remember: !this.state.remember})
    };

    validateForm = () => {
        const formErrors: any = {};
        const {email, password} = this.state;

        if (!email) {
            formErrors.email = 'Please enter a valid email address.'
        }

        if (!password) {
            formErrors.password = 'Please enter a password.'
        }

        return formErrors
    };

    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors = this.validateForm();
        this.setState({errors});

        if (isEmpty(errors)) {
            console.log('User Login Fired!');
        }
    };

    render() {
        const { setSignUp } = this.props;

        const {errors} = this.state;

        return (
            <div
                className="Container"
            >
                <div className="Header">
                    <h4>LOG IN</h4>
                </div>

                <form onSubmit={this.onSubmit}>
                    <div className="FormWrapper">
                        <div className="Row">
                <span className="Input">
                  <label htmlFor="name">Email Address</label>
                  <input
                      id="email"
                      type="text"
                      value={this.state.email}
                      onChange={this.onInputChange}
                  />
                    {errors.email && <div className="Error">{errors.email}</div>}
                </span>
                        </div>

                        <div className="Row">
                 <span className="Input">
                  <label htmlFor="email">Password</label>
                  <input
                      id="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onInputChange}
                  />
                     {errors.password &&
	                 <div className="Error">{errors.password}</div>}
                </span>
                        </div>

                        <LoginButton buttonText="Log In"/>

                        <div className="BottomWrapper">
                            <div className="StaySignedIn">
                                <input
                                    type="checkbox"
                                    checked={this.state.remember}
                                    onChange={this.onCheckedChange}
                                    name="remember"
                                />
                                <label htmlFor="remember"> Remember me </label>
                            </div>
                            <a
                                onClick={this.props.setReset}
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                </form>
                <p className="SignUp">
                    {'Don\'t have an account?'}
                    <a
                        onClick={setSignUp}
                    >
                        Sign up
                    </a>
                </p>
            </div>
        )
    }
}

export default LoginForm
