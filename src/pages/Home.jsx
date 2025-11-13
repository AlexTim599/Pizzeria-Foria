import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import Categories from "../components/Categories";
import Sort, { list } from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { setItems } from "../redux/slices/pizzaSlise";

export default function Home() {
  const [fetchPizzas, setFetchPizzas] = useState([]);

  const { categoryId, sort } = useSelector((state) => state.filter);
  const items = useSelector((state) => state.pizza.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("items", items);

  useEffect(() => {
    window.scrollTo(0, 0);
    getPizzas();
  }, [categoryId, sort]);

  async function getPizzas() {
    try {
      const res = await axios.get(
        `https://62aa24433b3143855442d35b.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy= ${sort.sortProperty}&order=desc`
      );
      dispatch(setItems(res.data));
    } catch (error) {
      alert("Ошибка загрузки");
      console.log("error", error);
    }
  }

  useEffect(() => {
    if (window.location.search) {
      const parse = qs.parse(window.location.search.substring(1));
      const sort = list.find(
        (data) => data.sortProperty === parse.sortProperty
      );
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
        {items.map((pizza) => (
          <PizzaBlock key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}
