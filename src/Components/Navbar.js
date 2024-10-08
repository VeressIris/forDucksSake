import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="bg-yellow-400 h-fit flex items-center justify-between py-7 px-12">
      {/* invisible div so the title will be centered*/}
      <div className="flex justify-between invisible">
        <HashLink
          to="/"
          className="text-red-600 hover:text-red-500 visited:text-red-800 px-2 text-lg"
        >
          Home
        </HashLink>
        <HashLink
          smooth
          to="/#about"
          className="text-red-600 hover:text-red-500 visited:text-red-800 px-2 text-lg"
        >
          About us
        </HashLink>
        <HashLink
          to="/#save"
          className="text-red-600 hover:text-red-500 visited:text-red-800 px-2 text-lg"
        >
          Save the ducks
        </HashLink>
      </div>
      <h1 className="text-3xl text-black font-bold m-auto">For Duck's Sake</h1>
      <div className="flex justify-between">
        <HashLink
          to="/"
          className="text-red-600 hover:text-red-500 visited:text-red-800 px-2 text-lg"
        >
          Home
        </HashLink>
        <HashLink
          to="/#about"
          className="text-red-600 hover:text-red-500 visited:text-red-800 px-2 text-lg"
        >
          About us
        </HashLink>
        <HashLink
          to="/#save"
          className="text-red-600 hover:text-red-500 visited:text-red-800 px-2 text-lg"
        >
          Save the ducks
        </HashLink>
      </div>
    </div>
  );
}
