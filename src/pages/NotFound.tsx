import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div
    className="flex flex-col h-full w-full p-5 items-center justify-center md:p-12 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg font-bold"
    >
      <div className="text-gray-700 text-2xl">Oops!!</div>
      <div className="text-rose-500 text-8xl md:text-[150px] my-5">404</div>
      <div className="text-gray-700 text-sm">The Page you are looking for is not found.</div>
      <Link to="/" className="my-10">
        <div
        className="px-3 py-1 text-sm md:text-xl text-rose-500 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg hover:bg-rose-500 hover:text-white cursor-pointer"
        >
          Go Back to Home Page
        </div>
      </Link>
    </div>
  )
}

export default NotFound