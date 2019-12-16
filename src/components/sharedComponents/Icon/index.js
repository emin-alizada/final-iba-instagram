import './icon.scss'
import React, {Component} from 'react';

class Icon extends Component {
    render() {
    const classList = ["icon-default", this.props.addClass];
        return (
            <>
                <img src={this.props.imgUrl} className={classList.toString()} alt=""/>
            </>
        );
    }
}

export default Icon;