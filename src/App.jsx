import Die from './Die';
import "./App.css"
import Heading from './Heading';

function App() {

  return (

    <div >
      <Heading color="orange" text="Snake Eyes" fontSize={42} />
      <Die numSides={6} />
    </div>
  );
}

export default App;
