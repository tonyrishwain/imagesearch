import React, {Component} from 'react';
import Unsplash from "react-unsplash-wrapper";

class Image extends Component {
    render() {
        if (this.props.keyword === '') {
            return <div></div>
        } else {
            return (
                <div>
                    <Unsplash keywords={this.props.keyword} />
                </div>
            )
        }
    }
}

export default Image