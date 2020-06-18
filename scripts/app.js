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
    console.log(e);
    this.setState({
      fromDate: e
    });
  };
  handleToDateChange = e => {
    console.log(e);
    this.setState({
      toDate: e
    });
  };
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
    const listToRender = this.state.hotelsList.filter(element => (this.state.price==="" || element.price===this.state.price.length) &&
    (this.state.country==="" || element.country===this.state.country) &&
    (this.state.minRooms===-1 || (element.rooms> this.state.minRooms && element.rooms < this.state.maxRooms)));
    console.log("to render",listToRender);
    console.log(this.state.hotelsList);
    console.log(this.state.price);
    
    return (
        <div>
          <Header since={this.state.fromDate} to={this.state.toDate}/>
          <FilterBar 
            handleFromDate={this.handleFromDateChange} 
            handleToDate={this.handleToDateChange}
            handlePrice={this.handlePriceChange}
            handleCountry={this.handleLocationChange}
            handleSize={this.handleSizeChange}/>

          {listToRender.map(item => (
           <HotelCard hotel={item}/> 
          ))}
        </div>
        
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));