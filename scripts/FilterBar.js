class FilterBar extends React.Component {
    state = {
        countryList:["Cualquier país","Argentina","Brasil","Chile","Uruguay"],
        sizeList:["Cualquier tamaño","Pequeños","Medianos","Grandes"],
        priceList:["Cualquier precio","$", "$$","$$$","$$$$"]
    }

    render() {
        const {handleStateChange}= this.props;
      return (
        <div className="filterBar">
            <CalendarFilter title="Since" onChangeSelected={handleStateChange} stateName={"fromDate"}/>
            <CalendarFilter title="to" onChangeSelected={handleStateChange} stateName={"toDate"}/>
            <ListFilter title="Country" onChangeSelected={handleStateChange} options={this.state.countryList} stateName={"country"}/>
            <ListFilter title="Price" onChangeSelected={handleStateChange} options={this.state.priceList} stateName={"price"}/>
            <ListFilter title="Size" onChangeSelected={handleStateChange} options={this.state.sizeList} stateName={"size"}/>
      </div>
      )
    }
  }