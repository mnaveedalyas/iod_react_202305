import PropsDisplayer from "./M6-Slide26-PropsDisplayer"
import reactLogo from '../assets/react.svg'

function PropsDisplayerCaller() {
  let count = 50;
    return(
      <>
        {/* Renders the component with no props */}
        <PropsDisplayer />

        {/* Renders the component with a single prop 'myProp' */}
        <PropsDisplayer myProp="first prop"/>

        {/* Renders the component with multiple props - add your own! */}
        <PropsDisplayer prop1="first" prop2="second" prop3={3}/>

        {/* String prop value uses quotes, numeric prop value uses curly braces */}
        <PropsDisplayer name="Harry Styles" age={29}/>

        {/* Array prop value - uses curly braces */}
        <PropsDisplayer pets={["cat", "dog", "goldfish"]}/>

        {/* Variable prop values - uses curly braces */}
        <PropsDisplayer reactLogo={reactLogo} buttonCount={count}/>

        {/* Our PropsDisplayer component won’t handle stringifying other components */}
        {/* <PropsDisplayer component={<ExampleComponent />}/> -
        fails for this example but the concept is still valid */}

      </>
    )

}

export default PropsDisplayerCaller