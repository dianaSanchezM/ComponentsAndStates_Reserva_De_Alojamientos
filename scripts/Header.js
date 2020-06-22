class Header extends React.Component {
  state = {
    days : ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"],
    months : ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
  }
    render() {
      const {since, to}= this.props;
      var sinceDate =new Date();
      var toDate = new Date();
      if (since!==""){
        sinceDate = new Date(parseInt(since));
        console.log(sinceDate);
      }
      if (to!==""){
        toDate = new Date(parseInt(to));
      }
      return (
        <div className="header">
        <h1>
          Hoteles
        </h1>
        <div className="dates">
        {since!=="" && <p className="date">Desde el 
        {this.state.days[sinceDate.getDay()]}, {sinceDate.getDate()} de
        {this.state.months[sinceDate.getMonth()]} de {sinceDate.getFullYear()}</p>}
        {to!=="" && <p className="date">hasta el {this.state.days[toDate.getDay()]}, {toDate.getDate()} de {this.state.months[toDate.getMonth()]} de {toDate.getFullYear()}</p>}
        </div>
      </div>
      )
    }
  }