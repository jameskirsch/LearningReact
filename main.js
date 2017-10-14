let thisReactElement = React.createElement(
    'h1',
    null,
    'TestMyJsx'
);
class MyJsxTestClass extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            thisReactElement,
            thisReactElement
        );
    }
}
ReactDOM.render(React.createElement(MyJsxTestClass, null), document.getElementById('jsxStuff'));

class ProfileLink extends React.Component {
    render() {
        return React.createElement(
            'a',
            { href: this.props.url,
                title: this.props.label,
                target: '_blank' },
            'Profile'
        );
    }
}

ReactDOM.render(React.createElement(ProfileLink, null), document.getElementById('profile'));

class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'div',
            { id: 'ohNo' },
            React.createElement(
                'a',
                { href: 'http://google.com' },
                'Google'
            ),
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
class DateTimeNow extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString();
        return React.createElement('span', null, 'current' + dateTimeNow);
    }
}
ReactDOM.render(React.createElement(DateTimeNow, null), document.getElementById('dateTime'));
