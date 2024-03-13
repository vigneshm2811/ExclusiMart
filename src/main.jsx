import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from './app/store';
import PageLayout from './components/Layout';
import WishList from './components/WishList/WishList';
import AddToCart from './components/AddToCart/AddToCart';
import Layouts from './pageLayout';

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<PageLayout />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/cart" element={<AddToCart />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {router}
    </Provider>
  </React.StrictMode>
);
