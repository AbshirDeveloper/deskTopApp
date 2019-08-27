import React, { Component } from 'react';
import Header from '../common/header'
import Navigation from '../common/navigation';
import MainContent from '../common/mainContent'

class Root extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    openNav = () => {
        document.getElementById("mySidenav").style.width = "200px";
    }
    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0%";
    }
    render() {
        return (
            <div className="main">
                <Header open={this.openNav} />
                <Navigation close={this.closeNav} />
                <div id="mainContent" className="mainContent">
                    <MainContent />
                </div>
            </div>
        );
    }
}

export default Root;