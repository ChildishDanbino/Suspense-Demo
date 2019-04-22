import React, { Component, lazy, Suspense } from 'react'
import Spinner from '../components/Spinner'


const LoginForm = lazy(() => import('../../src/forms/LoginForm'));
const SignUpForm = lazy(() => import('../../src/forms/SignUpForm'));
//const ResetPasswordForm = lazy(() => import('../../src/forms/ResetPasswordForm'));

const ResetPasswordForm = lazy(() => {
    return Promise.all([
        import('../../src/forms/ResetPasswordForm'),
        new Promise(resolve => setTimeout(resolve, 10000))
    ])
        .then(([moduleExports]) => moduleExports);
});

interface IState {
    FormComponent: any
    activeForm: string
}

class SuspenseApp extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            FormComponent: LoginForm,
            activeForm: props.resetToken ? 'confirm' : 'login'
        }
    }

    setSignUp = () => {
        this.setState({ activeForm: 'signUp', FormComponent: SignUpForm })
    };

    setLogin = () => {
        this.setState({ activeForm: 'login', FormComponent: LoginForm })
    };

    setReset = () => {
        this.setState({ activeForm: 'reset', FormComponent: ResetPasswordForm })
    };

    render() {
        const { FormComponent } = this.state;

        return (
            <Suspense fallback={<Spinner/>}>
                <LoginForm
                    {...this.props}
                    setLogin={this.setLogin}
                    setReset={this.setReset}
                    setSignUp={this.setSignUp}
                />
                <SignUpForm
                    {...this.props}
                    setLogin={this.setLogin}
                    setReset={this.setReset}
                    setSignUp={this.setSignUp}
                />
                <ResetPasswordForm
                    {...this.props}
                    setLogin={this.setLogin}
                    setReset={this.setReset}
                    setSignUp={this.setSignUp}
                />
            </Suspense>
        );
    }
}

export default SuspenseApp;
