import Die from './Die';
import "./App.css"
import Heading from './Heading';

function App() {

  return (

    <div >
      <Heading color="orange" text="Snake Eyes" />
      <Die numSides={6} />
    </div>
  );
}

export default App;
