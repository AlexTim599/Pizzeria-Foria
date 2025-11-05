import { useState } from "react";

export default function Categories() {
  const [active, setActive] = useState(false);
  const arrList = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  function handleClick(e) {
    setActive(e);
    console.log(active);
    console.log(arrList);
  }

  return (
    <div className="categories" onClick={handleClick}>
      <ul>
        <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  );
}
