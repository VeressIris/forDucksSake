import { useState } from "react";

export default function Ducks() {
  const [ducks, setDucks] = useState([]);

  function addDuck() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const size = 500;
    const x = Math.floor(Math.random() * (w - 550));
    const y = Math.floor(Math.random() * (h - 550));

    setDucks([...ducks, { x, y }]);
  }

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1 className="text-5xl font-medium mb-8">Help us save the ducks</h1>
      <div className="w-[500px] h-[500px] rounded-md border-solid border-black border-2">
        <img
          src="rubber_duck.png"
          className="w-32"
          onClick={addDuck}
          alt="duck"
        ></img>
        {ducks.map((duck, index) => (
          <img
            key={index}
            src="rubber_duck.png"
            className="w-32 absolute"
            style={{ left: duck.x, bottom: duck.y }}
            alt="ducky"
          ></img>
        ))}
      </div>
    </div>
  );
}
