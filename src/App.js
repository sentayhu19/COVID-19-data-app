import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './layouts/navigation';
import Home from './components/Home/Home';
import ListItem from './components/Details/ListItem';
import store from './redux/configureStore';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ListItem" element={<ListItem />} />
        </Routes>
      </Router>
    </Provider>
  </div>
);

export default App;
