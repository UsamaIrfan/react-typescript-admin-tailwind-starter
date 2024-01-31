import { Route, Routes } from 'react-router';

import AdminLayout from './components/layouts/Admin';
import {
  AddEditProduct,
  EditOrder,
  Home,
  Login,
  Orders,
  Products,
} from './pages';
import APP_ROUTES from './utils/routes';

function App() {
  return (
    <>
      <Routes>
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path={APP_ROUTES.HOME} element={<Home />} />
          <Route path={APP_ROUTES.PRODUCTS} element={<Products />} />
          <Route path={APP_ROUTES.ADD_PRODUCTS} element={<AddEditProduct />} />
          <Route path={APP_ROUTES.EDIT_PRODUCTS} element={<AddEditProduct />} />
          <Route path={APP_ROUTES.ORDERS} element={<Orders />} />
          <Route path={APP_ROUTES.EDIT_ORDERS} element={<EditOrder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
