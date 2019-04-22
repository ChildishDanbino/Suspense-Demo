// @ts-ignore
import React, {PureComponent} from 'react'
import './LoginButton.scss';

interface IProps {
    buttonText: string
}

class LoginButton extends PureComponent<IProps> {
    render() {
        const {buttonText} = this.props;

        return (
            <button
                type="submit"
                className="LoginButton"
            >
                {buttonText}
            </button>
        )
    }
}

export default LoginButton
