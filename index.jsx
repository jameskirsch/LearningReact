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
               target = "_blank" >Profiles
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
       return(
         <div {...this.props}>
            <a href="http://google.com">Google</a>
            <h1>{this.props.prop1} Showing from transpiled JSX</h1> 
            <h1>{this.props.prop2} Showing from transpiled JSX</h1>
            <span style={{borderColor: 'blue', borderWidth: 1, borderStyle: 'solid' }}>Border1</span>
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