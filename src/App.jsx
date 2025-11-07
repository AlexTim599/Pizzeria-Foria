import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import { useEffect, useState } from 'react';

function App() {
  const [fetchPizzas, setFetchPizzas] = useState([]);

  useEffect(() => {
    async function getPizzas() {
      const response = await fetch('https://62aa24433b3143855442d35b.mockapi.io/items')
        .then((response) => response.json())
        .then((data) => setFetchPizzas(data));
    }
    getPizzas();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <div>
            <h1>Это лизин сайт</h1>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {fetchPizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
