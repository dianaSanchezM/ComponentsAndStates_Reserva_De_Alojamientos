class HotelCard extends React.Component {
    render() {
      const {hotel}= this.props;
      const from = new Date(parseInt(hotel.availabilityFrom));
      const to = new Date(parseInt(hotel.availabilityTo));

      let priceLabel = '';
      for (let i = 0; i<hotel.price; i++){
        priceLabel += '$';
      }
      return (
        <div className="card">
          <img src={hotel.photo}></img>
          <h3>{hotel.name}</h3>
              <p className="info">{hotel.description}</p>
              <p className="info">🌎 {hotel.city}, {hotel.country}</p>
              <p className="info">🏨 {hotel.rooms} Habitaciones</p> 
              <p className="info">💰 {priceLabel}</p>
              
            <button type="button">Reservar</button>
         
        </div>
      )
    }
  }