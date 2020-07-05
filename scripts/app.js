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
    this.setState({
      [stateName]: event
    });
  }

  render() {
    const {size} = this.state;
    let minSize = 0;
    let maxSize = 0;
    if (size==="Grandes"){
      minSize= 20;
      maxSize = 100;
    }else if (size==="Pequeños"){
      maxSize = 11;
    }else if (size==="Medianos"){
      minSize = 10;
      maxSize = 21;
    }else{
      minSize = -1;
      maxSize = -1;
    }
    const listToRender = this.state.hotelsList.filter(element => (this.state.price==="" || element.price===this.state.price.length) &&
    (this.state.country==="" || element.country===this.state.country) &&
    (this.state.maxRooms===-1 || (element.rooms> minSize && element.rooms < maxSize)) &&
    (this.state.fromDate === "" || element.availabilityFrom-86400000 < this.state.fromDate) &&
    (this.state.toDate ==="" || element.availabilityTo-86400000 > this.state.toDate));
    return (
        <div className="App">
          <Header since={this.state.fromDate} to={this.state.toDate} country={this.state.country} size={this.state.size} price={this.state.price}/>
          <FilterBar 
            handleStateChange={this,this.handleStateChange}/>

          {(listToRender.length!==0)?<Main items={listToRender}/>: <p className="msg">No hay hoteles disponibles con los filtros seleccionados</p>}
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));