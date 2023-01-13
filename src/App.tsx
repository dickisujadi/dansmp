import { Provider } from 'react-redux';
import store from './store';
import PositionsPage from './pages/PositionsPage';
import Header from './components/molecules/Header';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
        <Provider store={store}>
          <PositionsPage />
        </Provider>
    </>
  );
};

export default App;
