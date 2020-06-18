class FilterBar extends React.Component {
    state = {
      countryList:["","Argentina","Brasil","Chile","Uruguay"],
      sizeList:["","Small","Medium","Big"],
      priceList:["","$", "$$","$$$","$$$$"]
    };

  
    render() {
        const {handleFromDate, handleToDate, handlePrice, handleSize, handleCountry}= this.props;
      return (
        <div>
            <CalendarFilter title="Since" onChangeSelected={handleFromDate}/>
            <CalendarFilter title="to" onChangeSelected={handleToDate}/>
            <ListFilter title="Country" onChangeSelected={handleCountry} options={this.state.countryList}/>
            <ListFilter title="Price" onChangeSelected={handlePrice} options={this.state.priceList}/>
            <ListFilter title="Size" onChangeSelected={handleSize} options={this.state.sizeList}/>
      </div>
      )
    }
  }