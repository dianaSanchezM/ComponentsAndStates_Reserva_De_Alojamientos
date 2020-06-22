

class CalendarFilter extends React.Component {
  state ={
    selected:""
  }

  handleChange = e => {
      this.setState({ selected: e.target.value},
          ()=>{
              this.props.onChangeSelected(this.state.selected);
          });
      
  };
  render() {
    const {title, onChangeSelected} = this.props;
    return (
      <div className="filter">
        <label>{title}</label>
        <input type="date" id="myDate" onChange={this.handleChange} value={this.state.selected}></input>
      </div>
    )
  }
}

