import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<App />} />
        <Route path="/" element={<App />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
