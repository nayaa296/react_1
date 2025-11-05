// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Nav';
import Routing from './components/Routing';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
