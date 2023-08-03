function ExampleComponent() {
  
  let mytext = 
    (<>
      <h3 id='h3text'>My Text</h3>
      <p>I am testing it</p>
    </>);
  
  const spiderman = { 
    name: 'Spiderman', 
    alterEgo: 'Peter Parker', 
    catchPhrase: 'With great power comes great responsibility' 
  };
  
  const spideyJSX = 
    (<div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
      <p>2 + 2</p>
      <p> {2 + 2}</p>
    </div>)
  ;

  return (
    <div className=" testClass">
      { mytext }
      <br />
      
      <h1>My Example Component</h1>
      <p>My first React component!</p>
      
      <br />
      <br />
      { spideyJSX }
    </div>
  )
}

export default ExampleComponent;