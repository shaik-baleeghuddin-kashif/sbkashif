
const Education = () => {
  return (
    <div
    className="flex flex-col md:flex-row w-full h-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg p-4 md:p-8 text-sm md:text-base"
    >
      <div className="flex flex-col md:flex-row w-full h-fit md:p-2 gap-3">
        {/* <!-- Left Section --> */}
        <div className="flex gap-x-3 md:flex-col items-center w-full md:w-[30%] p-3 rounded-lg space-y-3">
          {/* <!-- Logo Container --> */}
          <div className="flex  justify-center items-center w-12 h-12 md:w-32 md:h-32 bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-md">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[url('/bvrit-logo.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
          </div>
          {/* <!-- Institute Information --> */}
          <div className="text-center space-y-1 text-sm">
            <div className="font-extrabold text-gray-900 text-[12px] md:text-lg">B. V. Raju Institute of Technology</div>
            <div className="text-gray-800 font-bold text-[9px] md:text-[16px]">Narsapur, Medak, Telangana</div>
            <div className="text-gray-800 font-bold text-[9px] md:text-[16px]">(2019 - 2023)</div>
          </div>
        </div>
        
        {/* <!-- Right Section --> */}
        <div className="flex flex-col w-full md:w-[70%] p-3 rounded-lg space-y-2">
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm md:text-lg">
            <div>Electronics & Communication Engineering</div>
            <div>GPA: (7.3/10)</div>
          </div>
          {/* <!-- Placeholder for Course Content --> */}
          <p className="text-xs text-gray-800 leading-tight">
            {/* Replace this with your course content */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula est at sapien euismod, eget viverra lacus tristique.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education