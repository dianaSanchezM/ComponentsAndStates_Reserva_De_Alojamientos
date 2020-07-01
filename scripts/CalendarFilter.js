

class CalendarFilter extends React.Component {
  state ={
    selected:""
  }

  parseDate = (date) => {
    return String(new Date(String(date).replace(/-/ig, '/')).valueOf());
  }

  handleChange = e => {
    const date = e.target.value;
      this.setState({ selected: date},
          ()=>{
              this.props.onChangeSelected(this.props.stateName, this.parseDate(date));
          });
  };
  render() {
    const {title, onChangeSelected, stateName} = this.props;
    return (
      <div className="filter">
        <label>{title}</label>
        <input type="date" id="myDate" onChange={this.handleChange} value={this.state.selected}></input>
      </div>
    )
  }
}

