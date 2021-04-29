import './App.css';
import Navbar from './components/Layout/Navbar';
import Dashboard  from'./components/Screens/Dashboard/Dashboard'
function App() {
  return (
    <div className="App ">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
