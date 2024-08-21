export default function Navbar() {
  return (
    <div className="bg-yellow-400 h-fit flex items-center justify-between py-4 px-20">
      <h1 className="text-3xl text-black font-bold m-auto">For Ducks Sake</h1>
      <div className="flex justify-between">
        <a
          href=""
          className="text-red-600 hover:text-red-400 visited:text-red-800 px-2"
        >
          Home
        </a>
        <a
          href=""
          className="text-red-600 hover:text-red-400 visited:text-red-800 px-2"
        >
          About us
        </a>
      </div>
    </div>
  );
}
