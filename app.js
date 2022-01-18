var GroceryList = (props) => (
  <ul>
    <GroceryListItem item={props.groceryItems[0]}/>
    <GroceryListItem item={props.groceryItems[1]}/>
    <GroceryListItem item={props.groceryItems[2]}/>
  </ul>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super (props);

    this.state = {
      bold:false
    }
  }

  onItemHover() {
    this.setState({
      bold: true
    });
  }

  offItemHover() {
    this.setState({
      bold: false
    })
  }

  render() {

    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    }

    return (
      <li style={style} onMouseEnter={this.onItemHover.bind(this)} onMouseLeave={this.offItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}


ReactDOM.render(<GroceryList groceryItems={['cookies', 'chips', 'vegetals']}/>, document.getElementById("app"));
