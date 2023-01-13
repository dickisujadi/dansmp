import { Provider } from 'react-redux';
import store from './store';
import PositionsPage from './pages/PositionsPage';
import Header from './components/molecules/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';

const App = () => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PositionsPage />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
