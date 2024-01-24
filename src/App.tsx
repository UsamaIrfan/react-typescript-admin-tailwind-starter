import { Route, Routes } from 'react-router';

import AdminLayout from './components/layouts/Admin';
import { AddEditProduct, Home, Products } from './pages';
import APP_ROUTES from './utils/routes';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.PRODUCTS} element={<Products />} />
          <Route path={APP_ROUTES.ADD_PRODUCTS} element={<AddEditProduct />} />
          <Route path={APP_ROUTES.EDIT_PRODUCTS} element={<AddEditProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
