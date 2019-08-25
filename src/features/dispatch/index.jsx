import React, { Component } from 'react';
import Forms from '../../common/form'
import AgGrid from '../../common/grid'

class Dispatch extends Component {
    render() {
        return (
            <div>
                <Forms />
                <AgGrid />
            </div>
        );
    }
}

export default Dispatch;