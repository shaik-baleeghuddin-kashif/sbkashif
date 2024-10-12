
const Home = () => {
  return (
    <div
    className="flex flex-col-reverse md:flex-row w-full h-full justify-between text-zinc-500"
    >
      <div
          className="flex flex-col md:w-[50%] md:h-full h-[70%] w-full justify-center md:items-start md:p-[50px] bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg text-left"
      >
          <div className="text-[15px] px-5 md:text-[30px] font-semibold text-gray-800">Hello, I am</div>
          <div className="text-[25px] p-5 md:text-[50px]  font-extrabold text-rose-500">SHAIK BALEEGHUDDIN KASHIF</div>
          <div className="">
              <div className="text-[15px] md:text-[30px] p-5 font-medium text-gray-700"><span className="hover:underline">TECHNOLOGY SPECIALIST</span> @ <br /> <span className="hover:underline">THE D. E. SHAW GROUP</span></div>
          </div>
      </div>
      <div
      className="flex md:w-[50%] md:h-full h-[30%] w-full items-center justify-center"
      >
        <div className="relative h-[80%] md:h-[50%] lg:h-[60%] aspect-square">
            <div className="absolute inset-0 p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full">
                <div
                    className="h-full w-full bg-[url('/kashif.jpg')] bg-cover bg-center bg-no-repeat rounded-full border-4 border-white shadow-lg"
                ></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home