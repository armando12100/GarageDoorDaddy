import GarageDoor from "./images/garage.webp";

function App() {
  return (
    <>
      <div className="relative text-white">
        <img src={GarageDoor} alt="" className="h-100 w-full object-fill" />

        <div className="absolute top-24 left-4">
          <h1 className="font-bold">Welcome To Garage Door Daddy</h1>
          <p className="font-bold text-7xl w-4/6 mt-2">
            Professional Garage Door Repairs Near Murrieta
          </p>

          <div className="mt-8">
            <button
              className="bg-zinc-400 font-bold text-white px-5 py-3 my-2 rounded-md
             hover:bg-transparent cursor-pointer hover:text-black transition border-2
              hover:border-zinc-400 duration-200 mr-5"
            >
              (951) 295-7624
            </button>
            <button
              className="bg-zinc-400 font-bold text-white px-5 py-3 my-2 rounded-md
             hover:bg-transparent cursor-pointer hover:text-black transition border-2
              hover:border-zinc-400 duration-200"
            >
              Contact Us Now!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
