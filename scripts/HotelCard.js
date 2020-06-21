class HotelCard extends React.Component {
    render() {
      const {hotel}= this.props;
      const from = new Date(parseInt(hotel.availabilityFrom));
      const to = new Date(parseInt(hotel.availabilityTo));
      //console.log("hello",new Date(parseInt(hotel.availabilityFrom)));
      //const to = new Date(String(hotel.availabilityFrom));
      return (
        <div>
        <label><h1>
          Hotel
        </h1>
      </label><p>{hotel.name}</p>
        <label>Price</label><p>{hotel.price}</p>
        <label>Rooms</label><p>{hotel.rooms}</p>
        <label>Country</label><p>{hotel.country}</p>
        <label>From date</label><p>{String(from)}</p>
        <label>to date</label><p>{String(to)}</p>
      </div>
      )
    }
  }