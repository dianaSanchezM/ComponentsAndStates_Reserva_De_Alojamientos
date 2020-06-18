class HotelCard extends React.Component {
    render() {
      const {hotel}= this.props;
      return (
        <div>
        <label><h1>
          Hotel
        </h1>
      </label><p>{hotel.name}</p>
        <label>Price</label><p>{hotel.price}</p>
        <label>Rooms</label><p>{hotel.rooms}</p>
        <label>Country</label><p>{hotel.country}</p>
      </div>
      )
    }
  }