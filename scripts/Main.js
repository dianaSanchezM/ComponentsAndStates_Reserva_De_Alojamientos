class Main extends React.Component {
    
    render() {
      const {items} = this.props
      
      return (
        <div>
            {items.map(item => (
           <HotelCard hotel={item}/> 
          ))}
        </div>
      )
    }
  }