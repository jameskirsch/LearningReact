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
            'Try it!! finally, a dynamic build process!!!'
        );
    }
}
ReactDOM.render(React.createElement(MyJsxTestClass, null), document.getElementById('jsxStuff'));
class ProfileLink extends React.Component {
    render() {
        // A non JSX suggestion for conditional logic
        return (
            //use ternary/ or {}, IIFE type logic in here
            React.createElement(
                'a',
                { href: this.props.url,
                    title: this.props.label,
                    key: this.props.id },
                'Profiles ',
                ' '
            )
        );
    }
}
ReactDOM.render(React.createElement(ProfileLink, null), document.getElementById('profile'));
class HelloWorld extends React.Component {
    render() {
        var x = 10;
        var id = 1;
        return React.createElement(
            'div',
            this.props,
            [...Array(10)].map((x, id) => React.createElement(
                'div',
                { key: 'container' + id },
                React.createElement(ProfileLink, { key: 'profileElement' + id }),
                id,
                React.createElement('br', null)
            ))
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
class HeaderClass extends React.Component {
    render() {
        var dateTime = new Date().toLocaleString();
        return React.createElement('h1', { sampleproper: 'prop!' }, 'Hello ' + ' world' + dateTime);
    }
}
ReactDOM.render(React.createElement(HeaderClass, null), document.getElementById('componentClassId1'));
ReactDOM.render(React.createElement('h1', null, 'James Kirsch'), document.getElementById('header'));
let thisHeader = React.createElement('h1', {}, 'subtitle');
ReactDOM.render(React.createElement('div', {}, thisHeader, thisHeader), document.getElementById('root'));
var childElement1 = React.createElement('h1', { prop1: 'prop1', prop2: 'prop2' }, 'a sample');

var childElement2 = React.createElement('a', { href: 'http://google.com', id: 10 }, 'James Kirsch');
var parentElement = React.createElement('div', {}, childElement1, childElement2);
ReactDOM.render(parentElement, document.getElementById('getAnElementId'));
ReactDOM.render(React.createElement('div', null, React.createElement(HeaderClass, {
    id: 'ember',
    frameworkname: 'Ember.js',
    title: 'A framework for web apps.' }), React.createElement(HeaderClass, {
    id: 'backbone',
    frameworkname: 'Backbone.js',
    title: 'Backbone.js web applications...' }), React.createElement(HeaderClass, {
    id: 'angular',
    frameworkname: 'Angular.js',
    title: 'JavaScript MVW Framework' })), document.getElementById('Reused'));

class Clock extends React.Component {
    constructor(props) {
        super(props);

        //initializing states (confine to here in the constructor)
        this.state = {
            name: 'James Kirsch',
            hobbies: ['Programming', 'Reading', 'Living'],
            currentTime: new Date().toLocaleString()
        };
    }
    render() {
        return React.createElement(
            'div',
            null,
            'My Time ',
            this.state.currentTime
        );
    }
}
ReactDOM.render(React.createElement(Clock, null), document.getElementById('clock'));
