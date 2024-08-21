import { useState } from "react";

export default function Ducks() {
  const [ducks, setDucks] = useState([]);

  const boxSize = 500;
  const duckSize = 128;

  function addDuck() {
    const x = Math.floor(Math.random() * (boxSize - duckSize));
    const y = Math.floor(Math.random() * (boxSize - duckSize));

    setDucks([...ducks, { x, y }]);
  }

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1 className="text-5xl font-medium mb-8">Help us save the ducks</h1>
      <div className="relative w-[500px] h-[500px] rounded-md border-solid border-black border-2 overflow-hidden">
        <img
          src="rubber_duck.png"
          className="w-32 cursor-pointer active:scale-90"
          onClick={addDuck}
          alt="duck"
        />
        {ducks.map((duck, index) => (
          <img
            key={index}
            src="rubber_duck.png"
            className="w-32 absolute hover:cursor-pointer active:scale-90"
            style={{ left: duck.x, top: duck.y }}
            alt="ducky"
            onClick={addDuck}
          />
        ))}
      </div>
    </div>
  );
}
