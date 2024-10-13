
const About = () => {
  return (
    <div
    className="flex flex-col md:flex-row w-full h-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg p-4 md:p-8 text-sm md:text-base"
    >
      <div
      className="flex md:flex-col w-full md:w-[25%] h-[20%] md:h-full items-center  gap-3"
      >
        <div className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg w-[30%] md:w-[90%] h-full md:h-[80%] p-1 md:p-3 hover:p-1">
          <div
              className="h-full w-full bg-[url('/kashifabout.jpg')] bg-cover bg-center bg-no-repeat rounded-lg border-4 border-white shadow-lg"
          ></div>
        </div>
        <div className="text-center justify-center flex flex-col items-center md:mt-5 w-[70%] md:w-full h-full md:h-[20%]">
          <div className="text-gray-800 font-bold text-xs md:text-lg">SHAIK BALEEGHUDDIN KASHIF</div>
          <div className="text-gray-800 font-bold text-xs md:text-lg">(July 2001 - Present)</div>
          <div className="text-gray-800 font-bold text-xs md:text-lg">Hyderabad, INDIA</div>
        </div>
      </div>
      <div>
        {/* About content goes here */}
      </div>
    </div>
  )
}

export default About