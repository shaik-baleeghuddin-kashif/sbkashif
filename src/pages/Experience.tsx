import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div
      className="flex flex-col w-full h-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg p-4 md:p-8 text-sm md:text-base gap-3 overflow-auto max-h-full"
    >
      <div className="flex flex-col md:flex-row w-full h-fit md:p-2 gap-3">
        {/* <!-- Left Section --> */}
        <div className="flex gap-x-3 md:flex-col items-center w-full md:w-[30%] p-3 rounded-lg space-y-3 justify-between md:justify-start">
          {/* <!-- Logo Container --> */}
          <div className="flex justify-center items-center w-12 h-12 md:w-32 md:h-32 bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-md">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[url('/deshaw-logo.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
          </div>
          {/* <!-- Company Information --> */}
          <div className="md:text-center space-y-1 text-sm">
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">D. E. Shaw India Pvt Ltd</div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">(July 2023 - Present)</div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">Technology Specialist</div>
          </div>
        </div>
        
        {/* <!-- Right Section --> */}
        <div className="flex flex-col w-full md:w-[70%] p-3 rounded-lg space-y-2 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
            <div>Technology Specialist</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-md">
            D. E. Shaw India Private Limited (Hyderabad, Telangana, India)
          </div>
          <p className="text-justify text-gray-600 text-sm sm:text-base">
            As a Technology Specialist, I am responsible for building automation scripts, enhancing alert management tools, and developing various web applications using technologies like Go Lang, React, and Python. My role allows me to contribute to high-impact projects, improving internal systems and workflows.
          </p>
          <div className="text-gray-600 text-sm sm:text-base md:text-lg underline">
            Key Projects
          </div>
          <div className="my-4 text-gray-600 text-sm sm:text-base">
            <ol className="list-decimal list-inside">
              <li>Alert Automation and Management Tools</li>
              <li>Vendex Portal for Vendor Management</li>
              <li>Host Diagnostic Center CLI Application</li>
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

      {/* Add Schneider Electric Experience */}
      <div className="flex flex-col md:flex-row w-full h-fit md:p-2 gap-3">
        <div className="flex gap-x-3 md:flex-col items-center w-full md:w-[30%] p-3 rounded-lg space-y-3 justify-between md:justify-start">
          <div className="flex justify-center items-center w-12 h-12 md:w-32 md:h-32 bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-md">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[url('/schneider-logo.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
          </div>
          <div className="md:text-center space-y-1 text-sm">
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">Schneider Electric</div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">(April 2023 - July 2023)</div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">Automation Engineering Intern</div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="flex flex-col w-full md:w-[70%] p-3 rounded-lg space-y-2 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
            <div>Automation Engineering Intern</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-md">
            Schneider Electric (Hyderabad, Telangana, India)
          </div>
          <p className="text-justify text-gray-600 text-sm sm:text-base">
            During my internship at Schneider Electric, I contributed to developing a progress tracking application and collaborated on a plant monitoring autonomous robot using LiDAR and Camera systems. This role allowed me to deepen my knowledge of web development and autonomous systems.
          </p>
        </div>
      </div>

      <div className="my-2">
        <hr className="border-t border-gray-300" />
      </div>

      {/* Add TIHAN IIT Hyderabad Experience */}
      <div className="flex flex-col md:flex-row w-full h-fit md:p-2 gap-3">
        <div className="flex gap-x-3 md:flex-col items-center w-full md:w-[30%] p-3 rounded-lg space-y-3 justify-between md:justify-start">
          <div className="flex justify-center items-center w-12 h-12 md:w-32 md:h-32 bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-md">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[url('/tihan-logo.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
          </div>
          <div className="md:text-center space-y-1 text-sm">
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">TIHAN IIT Hyderabad</div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">(October 2022 - January 2023)</div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">Research Intern</div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="flex flex-col w-full md:w-[70%] p-3 rounded-lg space-y-2 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
            <div>Research Intern</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-md">
            TIHAN IIT Hyderabad (Hyderabad, Telangana, India)
          </div>
          <p className="text-justify text-gray-600 text-sm sm:text-base">
            As a Research Intern at TIHAN IIT Hyderabad, I worked on a GPS-based navigation system for autonomous bicycles. Additionally, I contributed to the development of software facilitating communication between users and autonomous taxis. This internship allowed me to apply my academic knowledge in autonomous systems and further fueled my interest in research.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Experience;
