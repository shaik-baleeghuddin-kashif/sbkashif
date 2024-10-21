
const Projects = () => {
  return (
    <div
      className="flex flex-col w-full h-full bg-white bg-opacity-10 backdrop-blur-lg shadow-lg border-white/30 border-2 rounded-lg p-4 md:p-8 text-sm md:text-base gap-3 overflow-auto max-h-full"
    >
      {/* Project 1 - Object Detection using LiDAR */}
      <div className="flex flex-col md:flex-row w-full h-fit md:p-2 gap-3">
        {/* <!-- Left Section --> */}
        <div className="flex gap-x-3 md:flex-col items-center w-full md:w-[30%] p-3 rounded-lg space-y-3 justify-between md:justify-start">
          {/* <!-- Placeholder for any media (e.g., project screenshot) --> */}
          <div className="flex justify-center items-center w-12 h-12 md:w-32 md:h-32 bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-md">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[url('/lidar-project.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
          </div>
          {/* <!-- Project Information --> */}
          <div className="md:text-center space-y-1 text-sm">
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">
              Object Detection using LiDAR for Self-Driving Cars
            </div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">
              February 2023
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="flex flex-col w-full md:w-[70%] p-3 rounded-lg space-y-2 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
            <div>Object Detection using LiDAR for Self-Driving Cars</div>
          </div>
          <p className="text-justify text-gray-600 text-sm sm:text-base">
            In this project, I utilized the Robot Operating System (ROS) to process data from LiDAR sensors for object detection in self-driving cars. By implementing sensor fusion techniques and the PointPillars method, I achieved a high degree of detection accuracy. The system was trained using the KITTI dataset to improve real-world performance and reliability.
          </p>
        </div>
      </div>

      <div className="my-2">
        <hr className="border-t border-gray-300" />
      </div>

      {/* Project 2 - Traffic Light Detection */}
      <div className="flex flex-col md:flex-row w-full h-fit md:p-2 gap-3">
        {/* <!-- Left Section --> */}
        <div className="flex gap-x-3 md:flex-col items-center w-full md:w-[30%] p-3 rounded-lg space-y-3 justify-between md:justify-start">
          <div className="flex justify-center items-center w-12 h-12 md:w-32 md:h-32 bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-md">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[url('/traffic-light-project.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
          </div>
          <div className="md:text-center space-y-1 text-sm">
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">
              Traffic Light Detection & Recognition for Self-Driving Cars
            </div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">
              October 2022
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="flex flex-col w-full md:w-[70%] p-3 rounded-lg space-y-2 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
            <div>Traffic Light Detection & Recognition for Self-Driving Cars</div>
          </div>
          <p className="text-justify text-gray-600 text-sm sm:text-base">
            This project involved developing a traffic light detection and recognition system for self-driving cars using Python libraries such as OpenCV, TensorFlow, and PyTorch. The YOLO v3 algorithm was employed to detect traffic lights, and the system was trained using the LISA dataset to ensure high accuracy in real-world driving scenarios.
          </p>
        </div>
      </div>

      <div className="my-2">
        <hr className="border-t border-gray-300" />
      </div>

      {/* Project 3 - Smart Home Automation using IoT */}
      <div className="flex flex-col md:flex-row w-full h-fit md:p-2 gap-3">
        {/* <!-- Left Section --> */}
        <div className="flex gap-x-3 md:flex-col items-center w-full md:w-[30%] p-3 rounded-lg space-y-3 justify-between md:justify-start">
          <div className="flex justify-center items-center w-12 h-12 md:w-32 md:h-32 bg-white bg-opacity-10 backdrop-blur-lg border border-white/30 rounded-lg shadow-md">
            <div className="w-10 h-10 md:w-24 md:h-24 bg-[url('/iot-project.png')] bg-cover bg-center bg-no-repeat rounded-lg"></div>
          </div>
          <div className="md:text-center space-y-1 text-sm">
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">
              Smart Home Automation using IoT
            </div>
            <div className="text-gray-800 font-bold text-[10px] sm:text-[12px] md:text-[16px]">
              October 2021
            </div>
          </div>
        </div>

        {/* <!-- Right Section --> */}
        <div className="flex flex-col w-full md:w-[70%] p-3 rounded-lg space-y-2 overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
            <div>Smart Home Automation using IoT</div>
          </div>
          <p className="text-justify text-gray-600 text-sm sm:text-base">
            In this project, I developed a wireless communication system that allowed users to control home appliances remotely via mobile devices. The system utilized IoT technology, integrated with sensors to automate appliance control based on real-time environment data, resulting in increased convenience and a 20% reduction in energy consumption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
