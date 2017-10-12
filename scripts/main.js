console.log('did it happen');

let myHeader = React.createElement('h1', null, 'James Kirsch')
class HeaderClass extends React.Component {
    render() {
        console.log(this.props);
        console.log('IsFrozen:', Object.isFrozen())
        if(this.props.id === 'ember') {
            console.log('ember happened');
            return React.createElement('div', this.props, 'ember');
        }
        else if(this.props.id === 'backbone') {
            return React.createElement('div', this.props, 'backbone');
        }
        else {
            return React.createElement('div', this.props, 'Other')
        }
    }
}