class ListFilter extends React.Component {
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
        const {title, onChangeSelected, options} = this.props;
      
      return (
          <div>
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