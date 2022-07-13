import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import routes from './routes';
function App() {
  return (
    <div className="App">
      <ul
        style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}
      >
        <li style={{ margin: '10px' }}>
          <Link to="/home">Home</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link to="/account">Account</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link to="/product">Product</Link>
        </li>
      </ul>
      <Routes>
        {routes.map((route, index) => {
          let Page = route.component;
          // logic check user login or change layout can write here;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
