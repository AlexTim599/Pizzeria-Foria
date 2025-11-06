import { useState } from 'react';

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const arrList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  function handleClick(index) {
    setActiveIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {arrList.map((item, index) => (
          <li
            key={item}
            onClick={() => handleClick(index)}
            className={activeIndex === index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
