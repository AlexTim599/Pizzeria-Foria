import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import { lazy, useEffect, useState } from 'react';
import SceletonPizzas from './components/SceletonPizzas';
import { Suspense } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
