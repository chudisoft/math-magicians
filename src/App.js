import { Outlet } from 'react-router-dom';
import './App.css';
import GlobalNav from './components/GlobalNav/GlobalNav';

function App() {
  return (
    <div className="App">
      <div className="row">
        <GlobalNav />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
