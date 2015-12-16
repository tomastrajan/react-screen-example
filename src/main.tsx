import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Hello extends React.Component<{name: string}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>Hello {this.props.name}</h1>);
    }
}

ReactDOM.render(<Hello name="Tomas"/>, document.getElementById('content'));
