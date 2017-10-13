class HelloWorld extends React.Component {
    render() {
       return(
         <div>
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