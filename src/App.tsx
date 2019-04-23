import React, {Component, lazy} from 'react'

// @ts-ignore
import confirm from '../src/forms/ConfirmPasswordForm'
import login from '../src/forms/LoginForm'
import reset from '../src/forms/ResetPasswordForm'
import signUp from '../src/forms/SignUpForm'

interface IState {
  FormComponent: React.ReactNode | null
  activeForm: string
}

const formConfig: any = {
  confirm,
  login,
  reset,
  signUp,
};

class App extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      FormComponent: null,
      activeForm: 'login'
    }
  }

  componentDidMount() {
    this.getComponent()
  }

  componentDidUpdate(prevProps: any, prevState: IState) {
    const formChanged = prevState.activeForm !== this.state.activeForm;

    if (formChanged) {
      this.getComponent()
    }
  }

  setSignUp = () => {
    this.setState({ activeForm: 'signUp' })
  };

  setLogin = () => {
    this.setState({ activeForm: 'login' })
  };

  setReset = () => {
    this.setState({ activeForm: 'reset' })
  };

  getComponent = () => {
    const { activeForm } = this.state;
    const module = formConfig[activeForm];
    this.setState({ FormComponent: module })
    //setTimeout(() => this.setState({ FormComponent: module }), 5000)
  };

  render() {
    const {FormComponent} = this.state;

    return FormComponent ? (
      // @ts-ignore
      <FormComponent
        {...this.props}
        setLogin={this.setLogin}
        setReset={this.setReset}
        setSignUp={this.setSignUp}
      />
    ) : null;
  }
}

export default App
