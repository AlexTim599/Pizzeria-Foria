import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FullPizza() {
  const [pizza, setPizza] = useState<{
    title: string;
    imageUrl: string;
    price: number;
  }>();
  let params = useParams();

  useEffect(() => {
    async function getPizza() {
      try {
        const res = await axios.get(
          `https://62aa24433b3143855442d35b.mockapi.io/items/${params.pizzaId}`,
        );
        setPizza(res.data);
      } catch (error) {
        console.log('error get Pizzasssssssssss');
      }
    }
    getPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка';
  }
  return (
    <div>
      <h3> {pizza.title}</h3>
      <img src={pizza.imageUrl} alt="654654" />
      <p>{pizza.price}₽</p>
    </div>
  );
}
