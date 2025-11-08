import { useEffect, useState } from 'react';
import PizzaBlock from './PizzaBlock';

export default function FetchPizzas() {
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
    <>
      {fetchPizzas.map((pizza) => (
        <PizzaBlock key={pizza.id} {...pizza} />
      ))}
    </>
  );
}
