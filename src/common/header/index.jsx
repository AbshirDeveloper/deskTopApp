import React, { Component } from 'react';
import logo from './img_avatar.png'

class Header extends Component {
    render() {
        return (
            <div className="mainHeader">
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={this.props.open.bind(this)}>&#9776;</span>
                <div className="userInfo">
                    <img src={logo} alt="user" style={{ width: "50px" }} />
                    <span className="userName">Abshir</span>
                </div>
            </div>
        );
    }
}

export default Header;