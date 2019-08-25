import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a className="closebtn" onClick={this.props.close.bind(this)}>&times;</a>
                </div>
            </div>
        );
    }
}

export default Navigation;