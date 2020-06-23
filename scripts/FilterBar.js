class FilterBar extends React.Component {
    

    constructor(props) {
      super(props);
      this.state = {
        countryList:["Cualquier país","Argentina","Brasil","Chile","Uruguay"],
        sizeList:["Cualquier tamaño","Pequeños","Medianos","Grandes"],
        priceList:["Cualquier precio","$", "$$","$$$","$$$$"]
      };
      this.handleSizeChange = this.handleSizeChange.bind(this);
    }

    handleSizeChange(stateName, e){
    let minSize = 0;
    let maxSize = 0;
    if (e==="Grandes"){
      minSize= 20;
      maxSize = 100;
    }else if (e==="Pequeños"){
      console.log("buu");
      maxSize = 11;
    }else if (e==="Medianos"){
      minSize = 10;
      maxSize = 21;
    }else{
      minSize = -1;
      maxSize = -1;
    }
    this.props.handleStateChange("minRooms",minSize);
    this.props.handleStateChange("maxRooms",maxSize);
    this.props.handleStateChange("size",e);
    
    }
    render() {
        const {handleStateChange, handleFromDate, handleToDate, handlePrice, handleSize, handleCountry}= this.props;
      return (
        <div className="filterBar">
            <CalendarFilter title="Since" onChangeSelected={handleStateChange} stateName={"fromDate"}/>
            <CalendarFilter title="to" onChangeSelected={handleStateChange} stateName={"toDate"}/>
            <ListFilter title="Country" onChangeSelected={handleStateChange} options={this.state.countryList} stateName={"country"}/>
            <ListFilter title="Price" onChangeSelected={handleStateChange} options={this.state.priceList} stateName={"price"}/>
            <ListFilter title="Size" onChangeSelected={this.handleSizeChange} options={this.state.sizeList} stateName={"size"}/>
      </div>
      )
    }
  }