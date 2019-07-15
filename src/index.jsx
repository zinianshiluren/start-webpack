import React from 'react';
import {render} from 'react-dom';
import './index.css'

class HelloMessage extends React.Component {

    state = {
        fixName: 'hello everyone',
    }

    componentDidMount() {
        this.test()
    }

    test = ()=> {
        console.log(this.state.fixName)
    }

    render() {
        return (
            <div className="main">
                Hello World !
            </div>
        );
    }
}

var root = document.createElement('div');
document.body.appendChild(root);

render(<HelloMessage />, root);
