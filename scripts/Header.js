class Header extends React.Component {
    render() {
      const {since, to}= this.props;
      return (
        <div>
        <h1>
          Hoteles
        </h1>
        <p>desde el {since} hasta el {to}</p>
      </div>
      )
    }
  }