import { Route, Routes } from 'react-router';

import './App.css';

import { Home } from './pages';
import APP_ROUTES from './utils/routes';

function App() {
  return (
    <>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
