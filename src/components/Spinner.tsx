// @ts-ignore
import React, {PureComponent} from 'react'
const Spinner = require('react-spinkit');
import './Spinner.scss'

class SpinnerComponent extends PureComponent<any> {
    render() {
        return (
            <div className="SpinnerContainer">
                <Spinner className="spinner" name='double-bounce'/>
            </div>
        )

    }
}

export default SpinnerComponent
