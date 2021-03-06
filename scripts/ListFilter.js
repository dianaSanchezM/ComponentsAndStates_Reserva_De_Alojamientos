class ListFilter extends React.Component {
    state ={
        selected:""
    }

    handleChange = e => {
      
        this.setState({ selected: e.target.value},
            ()=>{
                this.props.onChangeSelected(this.props.stateName,( String(this.state.selected).includes("Cualquier"))?"":this.state.selected);
            });
        
    };
    
    render() {
        const {title, onChangeSelected, options, stateName} = this.props;
      
      return (
          <div className="filter">
        <label>{title}</label>
        <select onChange={this.handleChange} value={this.state.selected}>
            {options.map(item => (
            <option value={item} >{item}</option>
          ))}
        </select>
        </div>
      )
    }
  }