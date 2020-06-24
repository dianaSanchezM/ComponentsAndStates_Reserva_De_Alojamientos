class HotelCard extends React.Component {
    render() {
      const {hotel}= this.props;
      const from = new Date(parseInt(hotel.availabilityFrom));
      const to = new Date(parseInt(hotel.availabilityTo));
      return (
        <div className="card">
          <img src={hotel.photo}></img>
          <h3>{hotel.name}</h3>
              <p className="info">{hotel.description}</p>
              <p className="info">🌎 {hotel.city}, {hotel.country}</p>
              <p className="info">🏨{hotel.rooms} Habitaciones</p> 
              <p className="info">💰{hotel.price}</p>
              
            <button type="button">Reservar</button>
         
        </div>
      )
    }
  }