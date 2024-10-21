import { Link } from "react-router-dom"

const Education = () => {
  return (
    <div
      className="flex flex-col w-full h-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg p-4 md:p-8 text-sm md:text-base gap-3 overflow-auto max-h-full"
    >
      <div className="flex flex-col md:flex-row w-full h-fit md:p-2 gap-3">
        {/* <!-- Left Section --> */}
        <div className="flex gap-x-3 md:flex-col items-center w-full md:w-[30%] p-3 rounded-lg space-y-3 justify-between md:justify-start">
          {/* <!-- Logo Container --> */}
          <div className="flex justify-center items-center w-12 h-12 md:w-32 md:h-32 bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-md">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[url('/bvrit-logo.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
          </div>
          {/* <!-- Institute Information --> */}
          <div className="md:text-center space-y-1 text-sm">
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">BVRIT</div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">(2019 - 2023)</div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">GPA: 7.3/10</div>
          </div>
        </div>
        
        {/* <!-- Right Section --> */}
        <div className="flex flex-col w-full md:w-[70%] p-3 rounded-lg space-y-2 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
            <div>Bachelor of Technology in Electronics and Communication Engineering</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-md">
            B. V. Raju Institute of Technology (Narsapur, Telangana, India)
          </div>
          <div className="text-gray-800 font-semibold text-sm sm:text-base md:text-md">
            GPA: 7.3/10
          </div>
          <p className="text-justify text-gray-600 text-sm sm:text-base">
            During my undergraduate studies, I developed a strong foundation in both electronics and computer science, which I applied through various projects that explored cutting-edge technologies like autonomous systems and IoT.
          </p>
          <div className="text-gray-600 text-sm sm:text-base md:text-lg underline">
            Key Projects
          </div>
          <div className="my-4 text-gray-600 text-sm sm:text-base">
            <ol className="list-decimal list-inside">
              <li>Object Detection using LiDAR for Self-Driving Cars</li>
              <li>Traffic Light Detection & Recognition for Self-Driving Cars</li>
              <li>Smart Home Automation using IoT</li>
            </ol>
          </div>
          <br />
          <p className="text-gray-600 text-sm sm:text-base">
            For more details on these projects, please visit the <Link to="/projects" className="underline">Projects Page</Link>.
          </p>
        </div>
      </div>
      <div className="my-2">
        <hr className="border-t border-gray-300" />
      </div>
    </div>
  )
}

export default Education
