import { Component } from "react";


class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            way: props.way
        }
    }

    render() {
        return (
            <div className="container-fluid bg-white ps-4 py-2 ">
                <small >{ this.state.way }</small>
            </div>
        );
    }
}

export default (Breadcrumb);