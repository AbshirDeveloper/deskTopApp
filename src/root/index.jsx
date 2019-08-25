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
        document.getElementById("mySidenav").style.width = "15%";
        document.getElementById("mainContent").style.width = "80%";
    }
    closeNav = () => {
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mainContent").style.width = "100%";
    }
    render() {
        return (
            <div>
                <Header open={this.openNav} />
                <Navigation close={this.closeNav} />
                <div id="mainContent" className="main">
                    <MainContent />
                </div>
            </div>
        );
    }
}

export default Root;