import { useEffect, useState } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

export default function Home() {
  const [fetchPizzas, setFetchPizzas] = useState([]);

  const { categoryId, sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  console.log('hello');

  useEffect(() => {
    async function getPizzas() {
      axios
        .get(
          `https://62aa24433b3143855442d35b.mockapi.io/items?${
            categoryId > 0 ? `category=${categoryId}` : ''
          }&sortBy= ${sort.sortProperty}&order=desc`,
        )
        .then((response) => setFetchPizzas(response.data))
        .catch((err) => console.log('Ошибка сети', err));
    }
    getPizzas();
    window.scrollTo(0, 0);
  }, [categoryId]);

  function onClickCategory(index) {
    dispatch(setCategoryId(index));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
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
