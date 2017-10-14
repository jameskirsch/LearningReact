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
            'Try it'
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
            this.props,
            React.createElement(
                'a',
                { href: 'http://google.com' },
                'Google'
            ),
            React.createElement(
                'h1',
                null,
                this.props.prop1,
                ' Showing from transpiled JSX'
            ),
            React.createElement(
                'h1',
                null,
                this.props.prop2,
                ' Showing from transpiled JSX'
            )
        );
    }
}
ReactDOM.render(React.createElement(HelloWorld, { prop1: '1', prop2: '2', prop3: '3' }), document.getElementById('content'));
class DateTimeNow extends React.Component {
    getDateTime() {
        return new Date().toLocaleString();
    }
    getData() {
        // call API
        var data = ['3'];
        return data;
    }
    render() {
        var stuff = this.getData();
        let dateTimeNow = new Date().toLocaleString();
        return React.createElement('span', null, 'current' + dateTimeNow + ' ' + this.getData()[0]);
    }
}
ReactDOM.render(React.createElement(DateTimeNow, null), document.getElementById('dateTime'));
