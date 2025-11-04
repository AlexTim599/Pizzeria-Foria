import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Hello</h2>
      <div>
        {" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          voluptates nulla ipsam distinctio tenetur, nam, beatae labore eaque
          amet maiores sint molestias sed sapiente nobis perspiciatis iste iure
          animi voluptatibus?
        </p>
      </div>
    </div>
  );
}

export default App;
