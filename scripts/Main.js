class Main extends React.Component {
    
    render() {
      const {items} = this.props
      
      return (
        <div className="main">
            {items.map(item => (
           <HotelCard hotel={item}/> 
          ))}
        </div>
      )
    }
  }