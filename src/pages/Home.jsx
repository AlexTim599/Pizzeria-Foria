import { useEffect, useState } from 'react';
import Categories from '../components/categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';

export default function Home() {
  const [fetchPizzas, setFetchPizzas] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sort, setSort] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  console.log(fetchPizzas);

  useEffect(() => {
    async function getPizzas() {
      const response = await fetch(
        `https://62aa24433b3143855442d35b.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy= ${sort.sortProperty}&order=desc`,
      )
        .then((response) => response.json())
        .then((data) => setFetchPizzas(data));
    }
    getPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, sort]);

  function onClickCategory(index) {
    setCategoryId(index);
  }

  function handleSort(data) {
    setSort(data);
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort value={sort} handleSort={handleSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {fetchPizzas.map((pizza) => (
          <PizzaBlock key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}
