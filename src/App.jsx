import './App.css'
import './Hello.css'
import Hello from './Hello';

function App() {
  const helloComponents = Array(3).fill(<Hello />);

  return (
    <div className="Hello">
      {helloComponents}
    </div>
  );
}

export default App;
