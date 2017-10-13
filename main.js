class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                '1. Showing from transpiled JSX'
            ),
            React.createElement(
                'h1',
                null,
                '2. Showing from transpiled JSX'
            )
        );
    }
}
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
