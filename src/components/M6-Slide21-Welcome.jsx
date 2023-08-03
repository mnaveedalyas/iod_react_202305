function Welcome(props) {
  
    return(
      
      <div className="componentBox">
        {/* if the 'name' prop exists, render it on the screen */}
        <h3>name: {props.name}!</h3>
        <h3>tel: {props.tel}!</h3>
        <h3 style={ {color: 'blue', textTransform: 'uppercase'} }>Welcome! Stylings</h3>
        {/* if this component has children, render them here */}
        {props.children}
      </div>
    )

}

export default Welcome