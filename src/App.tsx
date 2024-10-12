import { BrowserRouter as Router } from "react-router-dom"
import AppRouter from "./Routes"
import NavBar from "./components/NavBar"
const App = () => {
  // const location = useLocation();
  return (
    <Router>
      <div
      className='flex justify-center min-h-screen h-screen max-h-screen overflow-hidden bg-fixed bg-cover bg-no-repeat bg-center transition-colors duration-500 bg-[url("/bg.jpg")] items-center'
      >
        <div
        className="flex h-[95%] w-[95%] md:h-[95%] md:w-[95%] border-2 rounded-lg bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 flex-col gap-5 p-5"
        >
          {/* {location.pathname !== '/*' && <NavBar />} */}
          <NavBar />
          <div
          // className="flex h-[94%] max-h-[94%] w-[99%] md:w-[95%] self-center whitespace-normal bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg gap-5 p-5"
          className="flex h-[92%] max-h-[94%] w-[99%] md:w-[95%] self-center whitespace-normal py-5"
          >
            <AppRouter />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App