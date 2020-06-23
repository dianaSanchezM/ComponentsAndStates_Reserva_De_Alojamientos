class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {fromDate: "",
    toDate: "",
    country: "",
    price: "",
    size: "",
    minRooms: -1,
    maxRooms: -1,
    hotelsList:hotelsData
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(stateName, event) {
    console.log("handleStateChange",event, stateName);
    this.setState({
      [stateName]: event
    }, ()=>{
      console.log(this.state.country,this.state.size,this.state.price,this.state.fromDate,this.state.toDate,this.state.minRooms, this.state.maxRooms)
    });
  }

  render() {
    console.log("dates",this.state.fromDate,this.state.toDate, this.state.size);
    const listToRender = this.state.hotelsList.filter(element => (this.state.price==="" || element.price===this.state.price.length) &&
    (this.state.country==="" || element.country===this.state.country) &&
    (this.state.maxRooms===-1 || (element.rooms> this.state.minRooms && element.rooms < this.state.maxRooms)) &&
    (this.state.fromDate === "" || element.availabilityFrom < this.state.fromDate) &&
    (this.state.toDate ==="" || element.availabilityTo > this.state.toDate));
    //console.log("to render",listToRender);
    console.log(this.state.hotelsList);
    console.log(this.state.price);
    console.log("list",listToRender.length);
    return (
        <div className="App">
          <Header since={this.state.fromDate} to={this.state.toDate} country={this.state.country} size={this.state.size} price={this.state.price}/>
          <FilterBar 
            handleStateChange={this,this.handleStateChange}
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