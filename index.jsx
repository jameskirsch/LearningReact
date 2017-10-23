let thisReactElement = <h1>TestMyJsx</h1>
class MyJsxTestClass extends React.Component {
    render() {
        return <div>
            Try it!! finally, a dynamic build process!!!
        </div> 
    }
}
ReactDOM.render(
    <MyJsxTestClass/>,
    document.getElementById('jsxStuff')
)
class ProfileLink extends React.Component {
    render() {
        // A non JSX suggestion for conditional logic
        return (
            //use ternary/ or {}, IIFE type logic in here
            <a href={this.props.url}
               title={this.props.label}
               key={this.props.id}>Profiles {' '}
            </a>
        )
    }
}
ReactDOM.render(
    <ProfileLink/>,
    document.getElementById('profile')
)
class HelloWorld extends React.Component {
    render() {
        var x = 10;
        var id = 1;
       return(
         <div {...this.props}>
            {[...Array(10)].map((x, id) =>
            <div key={('container' + id)}>
                <ProfileLink key={('profileElement' + id)}/>{id}
                <br/>
            </div>
            )}
        </div>) 
    }
}
ReactDOM.render(
    <HelloWorld prop1='1' prop2='2' prop3='3'/>,
    document.getElementById('content')
)
class DateTimeNow extends React.Component {
    getDateTime() {
        return new Date().toLocaleString()
    };
    getData() {
        // call API
        var data = ['3'];
        return data;
    };
    render() {
        var stuff = this.getData();
        let dateTimeNow = new Date().toLocaleString();
        return React.createElement(
            'span',
            null,
            'current' + dateTimeNow + ' ' + this.getData()[0]
        )
    };
}
ReactDOM.render(
    <DateTimeNow/>,
    document.getElementById('dateTime')
)
class HeaderClass extends React.Component {
    render() {
        var dateTime = new Date().toLocaleString();
        return React.createElement(
            'h1',
            {sampleproper: 'prop!'},
            'Hello ' + ' world' + dateTime
        )
    }
}
ReactDOM.render(
    React.createElement(HeaderClass, null),
    document.getElementById('componentClassId1')
)
ReactDOM.render(
    React.createElement('h1', null, 'James Kirsch'),
    document.getElementById('header')
)
let thisHeader = React.createElement('h1', {}, 'subtitle')
ReactDOM.render(
    React.createElement('div', {}, thisHeader, thisHeader),
    document.getElementById('root')
)
var childElement1 = React.createElement('h1', {prop1: 'prop1', prop2: 'prop2'}, 'a sample');
var childElement2 = React.createElement('a', { href: 'http://google.com', id: 10 }, 'James Kirsch');
var parentElement = React.createElement('div', {}, childElement1, childElement2);
ReactDOM.render(
    parentElement,
    document.getElementById('getAnElementId')
)
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HeaderClass, {
            id: 'ember',
            frameworkname: 'Ember.js',
            title: 'A framework for web apps.'}),
        React.createElement(HeaderClass, {
            id: 'backbone',
            frameworkname: 'Backbone.js',
            title: 'Backbone.js web applications...'}),
        React.createElement(HeaderClass, {
            id: 'angular',
            frameworkname: 'Angular.js',
            title: 'JavaScript MVW Framework'})
        ),
        document.getElementById('Reused')
)
const StatelessFunctionSyntax = function(props) {
    return <h1 {...props}>Statelessness</h1>
}
// Example of Stateless Component as a function with arrow function
// it is used to shorten the syntax here
const StatelessFunctionSyntaxEx2 = (props) => {
    return <h1 {...props}>Statelessness 2 </h1>
}
// Example of stateless Component as a Function
function Sample2 (props) {
    return (<h1 {...props}>Figure out why calling props does not work here</h1>)
}
ReactDOM.render(
    React.createElement(Sample2, {testprop: 'yes', testprop2: 'yes2'}),
    document.getElementById('statelessness')
)

//very shorthand
const StatelessExample3 = props => <h1>State</h1>

// makes for more readability
const StatelessExample4 = (props) => {
    return (
        <h1>Another Example</h1>
    )
}

// demonstrate propTypes, defaultProps
function Sample5 (props) {
    return <a href={props.href}
            target="_blank"
            className="btn btn-primary">
            {props.text}
            </a>
}
//one or the other
Sample5.propTypes = {prop1: 'test'};
Sample5.defaultProps = {prop2: 'test'};
console.log(Sample5.propTypes);
console.log(Sample5.defaultProps);

ReactDOM.render(
    StatelessExample3(),
    document.getElementById('stateless3')
)

class Clock extends React.Component {
    constructor(props) {
        super(props)
        //initializing states (confine to here in the constructor)
        this.state = {
            name: 'James Kirsch',
            hobbies: [
                'Programming',
                'Reading',
                'Living'
            ],
            currentTime: (new Date()).toLocaleString()
        }
        this.launchClock()
    }

    // avoid this.forceUpdate() as a bad practice
    launchClock() {
        // Fat arrow is autobinding, meaning it gets the current value of this
        setInterval(() => {
            console.log('updating the state');
            // this.setState will trigger render
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }
    render() {
        //console.log('Clock render')
        return (
            <div>Time: {this.state.currentTime}
            {StatelessExample3()}
            {StatelessFunctionSyntax()}
            {StatelessFunctionSyntaxEx2()}
            {StatelessExample4()}
            {
            //    StatelessFunctionSyntax3()
           
            }
            <br /> 
            {
                this.state.hobbies[Math.floor(Math.random()*this.state.hobbies.length)]
            }
            </div>
        )
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('clock')
)



