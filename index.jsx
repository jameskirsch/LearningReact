let thisReactElement = <h1>TestMyJsx</h1>
class MyJsxTestClass extends React.Component {
    render() {
        return <div>
            {thisReactElement}
            {thisReactElement}
        </div> 
    }
}
ReactDOM.render(
    <MyJsxTestClass/>,
    document.getElementById('jsxStuff')
)

class ProfileLink extends React.Component {
    render() {
        return (
            <a href={this.props.url}
               title={this.props.label}
               target = "_blank" >Profile
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
       return(
         <div id ="ohNo">
            <a href="http://google.com">Google</a>
            <h1>1. Showing from transpiled JSX</h1>
            <h1>2. Showing from transpiled JSX</h1>
        </div>
       )
    }
}
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)
class DateTimeNow extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString()
        return React.createElement(
            'span',
            null,
            'current' + dateTimeNow
        )
    }
}
ReactDOM.render(
    <DateTimeNow/>,
    document.getElementById('dateTime')
)