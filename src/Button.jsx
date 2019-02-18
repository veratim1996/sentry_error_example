import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {fetchData} from "./actions";

class Button extends PureComponent {
    render() {
        return (
            <button type={"button"} onClick={this.props.fetchData}>Click me!</button>
        );
    }
}

export default connect(null, {fetchData})(Button);
