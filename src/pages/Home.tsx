import { useEffect } from 'react';
import qs from 'qs';
import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { selectPizzasFilter, setCategoryId, setFilters } from '../redux/slices/filterSlice';
import { useNavigate } from 'react-router-dom';
import { fetchPizzas, getPizzasSelector } from '../redux/slices/pizzaSlise';

export default function Home() {
  const { categoryId, sort } = useSelector(selectPizzasFilter);
  const { items } = useSelector(getPizzasSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    getPizzas();
  }, [categoryId, sort]);

  function getPizzas() {
    dispatch(fetchPizzas({ categoryId, sort }));
  }

  useEffect(() => {
    if (window.location.search) {
      const parse = qs.parse(window.location.search.substring(1));
      const sort = list.find((data) => data.sortProperty === parse.sortProperty);
      dispatch(setFilters({ ...parse, sort }));
    }
  }, []);

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: sort.sortProperty,
      categoryId,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sort.sortProperty]);

  function onClickCategory(index: number) {
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
        {items.map((pizza: any) => (
          <PizzaBlock key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}
