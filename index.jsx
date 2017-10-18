let thisReactElement = <h1>TestMyJsx</h1>
class MyJsxTestClass extends React.Component {
    render() {
        return <div>
            Try it!! finally, a dynamic build process
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
               target = "_blank" >Profiles {' '}
            </a>/*0*/
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
        var i = 0;
       return(
         <div {...this.props}>
            {[...Array(10)].map((x, i) =>
                <ProfileLink key={i}/>
            )}
            <a href="http://google.com">Google</a>
            <h1>{this.props.prop1} Showing from transpiled JSX1</h1> 
            <h1>{this.props.prop2} Showing from transpiled JSX2</h1>
            <span style={{borderColor: 'blue', borderWidth: 1, borderStyle: 'solid'}}>Border1</span>
            <span style={{border: '1px red solid'}}>Border2</span>
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