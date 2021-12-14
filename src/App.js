import logo from './logo.svg';
import './App.css';
import Logo from './Components/Logos/Logo';
import Addveg from './Components/AddVeg/Add';
import Fruit from './Components/Fruits/Fruit';
import Spice from './Components/Spices/Spice';
import Can from './Components/Cans/Can';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Addveg/>
      <Fruit/>
      <Spice/>
      <Can/>
    </div>
  );
}

export default App;
