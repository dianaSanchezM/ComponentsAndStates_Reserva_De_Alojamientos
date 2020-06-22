class App extends React.Component {
  state = {
    fromDate: "",
    toDate: "",
    country: "",
    price: "",
    size: 0,
    minRooms: -1,
    maxRooms: -1,
    hotelsList:hotelsData
  };

  handleFromDateChange = e => {
    
    this.setState({
      fromDate: this.parseDate(e)
    });
  };
  handleToDateChange = e => {
    console.log(this.parseDate(e));
    this.setState({
      toDate: this.parseDate(e)
    });
  };

  parseDate = (date) => {
    var s = String(date).replace(/-/ig, '/');
    var result= String(new Date(s).valueOf());
    console.log("parsed",result);
    return result;
  }
  handlePriceChange = e => {
    const filteredList = this.state.hotelsList.filter(element => element.price===e.length);
    console.log(e);
    this.setState({
      price: e
    }, ()=>{
      console.log(this.state.price)
    });
  };
  handleSizeChange = e => {
    console.log(e);
    let minSize = 0;
    let maxSize = 0;
    if (e==="Big"){
      minSize= 20;
      maxSize = 31;
    }else if (e==="Small"){
      console.log("buu");
      maxSize = 11;
    }else if (e==="Medium"){
      minSize = 10;
      maxSize = 21;
    }else{
      minSize = -1;
      maxSize = -1;
    }
    this.setState({
      minRooms: minSize,
      maxRooms: maxSize
    }, ()=>{
      console.log(this.state.minRooms, this.state.maxRooms)
    });
  };
  handleLocationChange = e => {
    console.log(e);
    this.setState({
      country: e
    });
  };

  render() {
    console.log("dates",this.state.fromDate,this.state.toDate);
    const listToRender = this.state.hotelsList.filter(element => (this.state.price==="" || element.price===this.state.price.length) &&
    (this.state.country==="" || element.country===this.state.country) &&
    (this.state.minRooms===-1 || (element.rooms> this.state.minRooms && element.rooms < this.state.maxRooms)) &&
    (this.state.fromDate === "" || element.availabilityFrom < this.state.fromDate) &&
    (this.state.toDate ==="" || element.availabilityTo > this.state.toDate));
    //console.log("to render",listToRender);
    console.log(this.state.hotelsList);
    console.log(this.state.price);
    console.log("list",listToRender.length);
    return (
        <div className="App">
          <Header since={this.state.fromDate} to={this.state.toDate}/>
          <FilterBar 
            handleFromDate={this.handleFromDateChange} 
            handleToDate={this.handleToDateChange}
            handlePrice={this.handlePriceChange}
            handleCountry={this.handleLocationChange}
            handleSize={this.handleSizeChange}/>

          {(listToRender.length!==0)?<Main items={listToRender}/>: <p className="msg">No hay hoteles disponibles con los filtros seleccionados</p>}
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));