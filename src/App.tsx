import React, { Component } from 'react'

// @ts-ignore
import { formConfig } from '../src/formConfig';

interface IState {
  FormComponent: JSX.Element | null
  activeForm: string
}

class App extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      FormComponent: null,
      activeForm: props.resetToken ? 'confirm' : 'login'
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

  getComponent = async () => {
    const { activeForm } = this.state;
    // Lazy Load Component Module
    const module = await formConfig[activeForm];
    this.setState({ FormComponent: module.default })
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
