import Die from './Die';
import "./App.css"
import './Hello.css';
// import HappyChristmas from './Happy';

function App() {
  //const family = ['Andrew', 'Julie', 'Rebekah', 'Sarah'];
  return (
    // <div className="Hello">
    //   {family.map((name, index) => (
    //     <div key={index}>
    //       Hello, {name}
    //     </div>
    //   ))}
    //   <HappyChristmas person="Andrew" />
    //   <HappyChristmas person="Julie" />
    //   <HappyChristmas person="Rebekah and Sarah" />
    // </div>
    <div className="Hello">
      <Die numSides={6} />
    </div>
  );
}

export default App;
